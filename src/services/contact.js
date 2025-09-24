/**
 * 联系表单服务 - 飞书机器人集成
 */

/**
 * 发送联系表单到飞书
 * @param {Object} data - 表单数据
 * @param {string} data.lastname - 姓
 * @param {string} data.firstname - 名
 * @param {string} data.email - 邮箱
 * @param {string} data.phone - 电话
 * @param {string} data.other - 咨询内容
 * @returns {Promise<Object>} 发送结果
 */
export async function sendContactForm(data) {
  try {
    // 从环境变量获取配置
    const webhookUrl = import.meta.env.VITE_WEB_HOOK_URL;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const templateVersion = import.meta.env.VITE_TEMPLATE_VERSION;

    if (!webhookUrl || !templateId || !templateVersion) {
      throw new Error('Missing required environment variables. Please check VITE_WEB_HOOK_URL, VITE_TEMPLATE_ID, and VITE_TEMPLATE_VERSION');
    }

    console.log("data",data)

    // 构建飞书消息负载
    const payload = {
      msg_type: "interactive",
      card: {
        type: "template",
        data: {
          template_id: templateId,
          template_version_name: templateVersion,
          template_variable: {
            lastname: data.lastname || '',
            firstname: data.firstname || '',
            email: data.email || '',
            phone: data.phone || '',
            other: data.other || '',
          },
        },
      },
    };

    console.log(JSON.stringify(payload))

    console.log('Sending contact form to Feishu:', { ...payload, card: { ...payload.card, data: { ...payload.card.data, template_variable: '...' } } });

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
    }

    const responseData = await response.json();
    console.log('Feishu webhook response:', responseData);

    return { success: true, data: responseData };
  } catch (error) {
    console.error("Failed to send contact form:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "发送失败，请稍后重试",
    };
  }
}

/**
 * 表单数据验证
 * @param {Object} data - 表单数据
 * @returns {Object} 验证结果
 */
export function validateContactForm(data) {
  const errors = {};

  // 姓名验证
  const fullName = `${data.firstname || ''} ${data.lastname || ''}`.trim();
  if (!fullName) {
    errors.name = '请输入姓名';
  }

  // 邮箱验证
  if (!data.email) {
    errors.email = '请输入邮箱地址';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = '请输入有效的邮箱地址';
  }

  // 电话验证
  if (!data.phone) {
    errors.phone = '请输入联系电话';
  } else if (!/^[\d\s\-\+\(\)]{10,}$/.test(data.phone.replace(/\s/g, ''))) {
    errors.phone = '请输入有效的联系电话';
  }

  // 咨询内容验证
  if (!data.other) {
    errors.message = '请输入咨询内容';
  } else if (data.other.length < 10) {
    errors.message = '咨询内容至少需要10个字符';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}
