<template>
  <div class="company-page">
    <AppHeader />
    
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-background">
        <div class="hero-gradient"></div>
        <div class="hero-pattern"></div>
      </div>
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title title-multilevel company-super-title">
            <span class="title-main company-main-title">{{ t('company.hero.title') }}</span>
            <span class="title-highlight title-multilevel">
              <span class="title-main company-future-title">{{ t('company.hero.subtitle') }}</span>
            </span>
            <span class="subtitle-en company-english-line">{{ t('company.hero.englishLine') }}</span>
          </h1>
          <div class="hero-description content-bilingual">
            <p class="content-main">{{ t('company.hero.description') }}</p>
            <p class="content-en">{{ t('company.hero.descriptionEn') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Company Introduction -->
    <section id="about-dataarc" class="company-intro">
      <div class="container">
        <div class="intro-content">
          <div class="intro-text">
            <div class="title-bilingual">
              <h2 class="title-main">{{ t('company.about.title') }}</h2>
              <span class="title-en">{{ t('company.about.titleEn') }}</span>
            </div>
            <div class="content-bilingual">
              <p class="content-main">{{ t('company.about.description') }}</p>
              <p class="content-en">{{ t('company.about.descriptionEn') }}</p>
            </div>
            
            <div class="company-stats">
              <div class="stat-item">
                <div class="stat-number">{{ t('company.about.stats.founded.number') }}</div>
                <div class="stat-label-bilingual">
                  <span class="stat-main">{{ t('company.about.stats.founded.label') }}</span>
                  <span class="stat-en">{{ t('company.about.stats.founded.labelEn') }}</span>
                </div>
              </div>
              <div class="stat-item">
                <div class="stat-number">{{ t('company.about.stats.patents.number') }}</div>
                <div class="stat-label-bilingual">
                  <span class="stat-main">{{ t('company.about.stats.patents.label') }}</span>
                  <span class="stat-en">{{ t('company.about.stats.patents.labelEn') }}</span>
                </div>
              </div>
              <div class="stat-item">
                <div class="stat-number">{{ t('company.about.stats.partners.number') }}</div>
                <div class="stat-label-bilingual">
                  <span class="stat-main">{{ t('company.about.stats.partners.label') }}</span>
                  <span class="stat-en">{{ t('company.about.stats.partners.labelEn') }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section id="core-team" class="team-section">
      <div class="container">
        <div class="section-header">
          <div class="title-bilingual">
            <h2 class="title-main">{{ t('company.team.title') }}</h2>
            <span class="title-en">{{ t('company.team.titleEn') }}</span>
          </div>
          <div class="content-bilingual">
            <p class="content-main">{{ t('company.team.description') }}</p>
            <p class="content-en">{{ t('company.team.descriptionEn') }}</p>
          </div>
        </div>

        <!-- Leadership Team -->
        <div class="leadership-grid">
          <div class="leader-card glass-card">
            <div class="leader-photo">
              <img src="/images/icons/关于我们-团队介绍-cto.png" alt="CTO 徐铖晋博士" class="leader-avatar">
              <div class="photo-overlay">
                <div class="overlay-content">
                  <div class="leader-role">{{ t('company.team.cto.title') }}</div>
                </div>
              </div>
            </div>
            <div class="leader-info">
              <h3 class="title-level-3">{{ t('company.team.cto.name') }}</h3>
              <div class="leader-title">{{ t('company.team.cto.title') }}</div>
              <p class="leader-bio">
                {{ t('company.team.cto.bio') }}
              </p>
              <div class="leader-highlights">
                <div 
                  v-for="(highlight, index) in ctoHighlights" 
                  :key="index" 
                  class="highlight-tag"
                >
                  {{ highlight }}
                </div>
              </div>
              <div class="leader-achievements">
                <div class="achievement-item">
                  <span class="achievement-number">{{ t('company.team.cto.achievements.papers') }}</span>
                  <span class="achievement-label">{{ t('company.team.cto.achievements.papersLabel') }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="leader-card glass-card">
            <div class="leader-photo">
              <img src="/images/icons/关于我们-团队介绍-ceo.png" alt="CEO 江旭晖博士" class="leader-avatar">
              <div class="photo-overlay">
                <div class="overlay-content">
                  <div class="leader-role">{{ t('company.team.ceo.title') }}</div>
                </div>
              </div>
            </div>
            <div class="leader-info">
              <h3 class="title-level-3">{{ t('company.team.ceo.name') }}</h3>
              <div class="leader-title">{{ t('company.team.ceo.title') }}</div>
              <p class="leader-bio">
                {{ t('company.team.ceo.bio') }}
              </p>
              <div class="leader-highlights">
                <div 
                  v-for="(highlight, index) in ceoHighlights" 
                  :key="index" 
                  class="highlight-tag"
                >
                  {{ highlight }}
                </div>
              </div>
              <div class="leader-achievements">
                <div class="achievement-item">
                  <span class="achievement-number">{{ t('company.team.ceo.achievements.papers') }}</span>
                  <span class="achievement-label">{{ t('company.team.ceo.achievements.papersLabel') }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Team Features -->
        <div class="team-features glass-card">
          <div class="title-bilingual">
            <h3 class="title-main">{{ t('company.team.advantages.title') }}</h3>
            
            <span class="title-en">{{ t('company.team.advantages.titleEn') }}</span>
          </div>
          <div class="content-bilingual">
            <p class="content-main">{{ t('company.team.advantages.description') }}</p>
            <p class="content-en">{{ t('company.team.advantages.descriptionEn') }}</p>
          </div>
          
          <div class="features-grid">
            <div class="feature-item">
              <div class="icon-wrapper">
                <img src="/images/icons/采样技术图标.png" alt="采样技术" class="icon-img">
                <div class="icon-glow"></div>
              </div>
              <div class="feature-content">
                <div class="title-bilingual">
                  <h4 class="title-main">{{ t('company.team.advantages.sampling.title') }}</h4>
                  
                  <span class="title-en">{{ t('company.team.advantages.sampling.titleEn') }}</span>
                </div>
                <div class="content-bilingual">
                  <p class="content-main">{{ t('company.team.advantages.sampling.description') }}</p>
                  <p class="content-en">{{ t('company.team.advantages.sampling.descriptionEn') }}</p>
                </div>
              </div>
            </div>
            
            <div class="feature-item">
              <div class="icon-wrapper">
                <img src="/images/icons/合成技术图标.png" alt="合成技术" class="icon-img">
                <div class="icon-glow"></div>
              </div>
              <div class="feature-content">
                <div class="title-bilingual">
                  <h4 class="title-main">{{ t('company.team.advantages.synthesis.title') }}</h4>
                  
                  <span class="title-en">{{ t('company.team.advantages.synthesis.titleEn') }}</span>
                </div>
                <div class="content-bilingual">
                  <p class="content-main">{{ t('company.team.advantages.synthesis.description') }}</p>
                  <p class="content-en">{{ t('company.team.advantages.synthesis.descriptionEn') }}</p>
                </div>
              </div>
            </div>
            
            <div class="feature-item">
              <div class="icon-wrapper">
                <img src="/images/icons/训练技术图标.png" alt="训练技术" class="icon-img">
                <div class="icon-glow"></div>
              </div>
              <div class="feature-content">
                <div class="title-bilingual">
                  <h4 class="title-main">{{ t('company.team.advantages.training.title') }}</h4>
                  
                  <span class="title-en">{{ t('company.team.advantages.training.titleEn') }}</span>
                </div>
                <div class="content-bilingual">
                  <p class="content-main">{{ t('company.team.advantages.training.description') }}</p>
                  <p class="content-en">{{ t('company.team.advantages.training.descriptionEn') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Other Team Members -->
        <div class="other-members">
          <h3 class="title-level-3">{{ t('company.team.otherMembers.title') }}</h3>
          <div class="members-grid">
            <div class="member-card glass-card">
              <div class="icon-wrapper">
                <img src="/images/icons/COO图标.png" alt="COO" class="icon-img">
                <div class="icon-glow"></div>
              </div>
              <div class="member-role">{{ t('company.team.otherMembers.coo.role') }}</div>
              <div class="member-description">{{ t('company.team.otherMembers.coo.description') }}</div>
            </div>
            
            <div class="member-card glass-card">
              <div class="icon-wrapper">
                <img src="/images/icons/算法团队图标.png" alt="算法团队" class="icon-img">
                <div class="icon-glow"></div>
              </div>
              <div class="member-role">{{ t('company.team.otherMembers.algorithm.role') }}</div>
              <div class="member-description">{{ t('company.team.otherMembers.algorithm.description') }}</div>
            </div>
            
            <div class="member-card glass-card">
              <div class="icon-wrapper">
                <img src="/images/icons/投融资BD图标.png" alt="投融资BD" class="icon-img">
                <div class="icon-glow"></div>
              </div>
              <div class="member-role">{{ t('company.team.otherMembers.bd.role') }}</div>
              <div class="member-description">{{ t('company.team.otherMembers.bd.description') }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

   
    
    <!-- Company Details Section -->
    <section id="about-dataarc" class="company-details">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">{{ t('company.companyDetails.title') }}</h2>
          <p class="section-subtitle">{{ t('company.companyDetails.subtitle') }}</p>
        </div>
        
        <div class="details-grid">
          <div class="detail-card">
            <div class="icon-wrapper">
                <img src="/images/icons/公司标识图标.png" alt="公司标识" class="icon-img">
                <div class="icon-glow"></div>
              </div>
            <div class="title-bilingual">
              <h3 class="title-main">{{ t('company.companyDetails.companyName.title') }}</h3>
              
              <span class="title-en">{{ t('company.companyDetails.companyName.titleEn') }}</span>
            </div>
            <div class="content-bilingual">
              <p class="content-main">{{ t('company.companyDetails.companyName.value') }}</p>
              <p class="content-en">{{ t('company.companyDetails.companyName.valueEn') }}</p>
            </div>
          </div>
          
          <div class="detail-card">
            <div class="icon-wrapper">
                <img src="/images/icons/成立时间图标.png" alt="成立时间" class="icon-img">
                <div class="icon-glow"></div>
              </div>
            <div class="title-bilingual">
              <h3 class="title-main">{{ t('company.companyDetails.founded.title') }}</h3>
              
              <span class="title-en">{{ t('company.companyDetails.founded.titleEn') }}</span>
            </div>
            <div class="content-bilingual">
              <p class="content-main">{{ t('company.companyDetails.founded.value') }}</p>
              <p class="content-en">{{ t('company.companyDetails.founded.valueEn') }}</p>
            </div>
            <div class="content-bilingual">
              <p class="content-main">{{ t('company.companyDetails.founded.description') }}</p>
              <p class="content-en">{{ t('company.companyDetails.founded.descriptionEn') }}</p>
            </div>
          </div>
          
          <div class="detail-card">
            <div class="icon-wrapper">
                <img src="/images/icons/地址位置图标.png" alt="地址位置" class="icon-img">
                <div class="icon-glow"></div>
              </div>
            <div class="title-bilingual">
              <h3 class="title-main">{{ t('company.companyDetails.address.title') }}</h3>
              
              <span class="title-en">{{ t('company.companyDetails.address.titleEn') }}</span>
            </div>
            <div class="content-bilingual">
              <p class="content-main">{{ t('company.companyDetails.address.value') }}</p>
              <p class="content-en">{{ t('company.companyDetails.address.valueEn') }}</p>
            </div>
            <div class="content-bilingual">
              <p class="content-main">{{ t('company.companyDetails.address.detail') }}</p>
              <p class="content-en">{{ t('company.companyDetails.address.detailEn') }}</p>
            </div>
          </div>
          
          <div class="detail-card">
            <div class="icon-wrapper">
                <img src="/images/icons/愿景目标图标.png" alt="愿景目标" class="icon-img">
                <div class="icon-glow"></div>
              </div>
            <div class="title-bilingual">
              <h3 class="title-main">{{ t('company.companyDetails.vision.title') }}</h3>
              
              <span class="title-en">{{ t('company.companyDetails.vision.titleEn') }}</span>
            </div>
            <div class="content-bilingual">
              <p class="content-main">{{ t('company.companyDetails.vision.value') }}</p>
              <p class="content-en">{{ t('company.companyDetails.vision.valueEn') }}</p>
            </div>
            <div class="content-bilingual">
              <p class="content-main">{{ t('company.companyDetails.vision.description') }}</p>
              <p class="content-en">{{ t('company.companyDetails.vision.descriptionEn') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Details Section -->
    <section id="core-team" class="team-details">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">{{ t('company.teamDetails.title') }}</h2>
          <p class="section-subtitle">{{ t('company.teamDetails.subtitle') }}</p>
        </div>
        
        <div class="team-overview">
          <div class="team-info">
            <div class="title-bilingual">
              <h3 class="title-main">{{ t('company.teamDetails.teamScale.title') }}</h3>
              
              <span class="title-en">{{ t('company.teamDetails.teamScale.titleEn') }}</span>
            </div>
            <div class="content-bilingual">
              <p class="content-main">{{ t('company.teamDetails.teamScale.description') }}</p>
              <p class="content-en">{{ t('company.teamDetails.teamScale.descriptionEn') }}</p>
            </div>
            
            <div class="team-advantages">
              <div class="advantage-item">
                <div class="icon-wrapper">
                <img src="/images/icons/研究积累图标.png" alt="研究积累" class="icon-img">
                <div class="icon-glow"></div>
              </div>
                <div class="advantage-content">
                  <div class="title-bilingual">
                    <h4 class="title-main">{{ t('company.teamDetails.advantages.research.title') }}</h4>
                    
                    <span class="title-en">{{ t('company.teamDetails.advantages.research.titleEn') }}</span>
                  </div>
                  <div class="content-bilingual">
                    <p class="content-main">{{ t('company.teamDetails.advantages.research.description') }}</p>
                    <p class="content-en">{{ t('company.teamDetails.advantages.research.descriptionEn') }}</p>
                  </div>
                </div>
              </div>
              
                            <div class="advantage-item">
                <div class="icon-wrapper">
                <img src="/images/icons/业界知名图标.png" alt="业界知名" class="icon-img">
                <div class="icon-glow"></div>
              </div>
                <div class="advantage-content">
                  <div class="title-bilingual">
                    <h4 class="title-main">{{ t('company.teamDetails.advantages.reputation.title') }}</h4>
                    
                    <span class="title-en">{{ t('company.teamDetails.advantages.reputation.titleEn') }}</span>
                  </div>
                  <div class="content-bilingual">
                    <p class="content-main">{{ t('company.teamDetails.advantages.reputation.description') }}</p>
                    <p class="content-en">{{ t('company.teamDetails.advantages.reputation.descriptionEn') }}</p>
                  </div>
                </div>
              </div>
              
              <div class="advantage-item">
                <div class="icon-wrapper">
                <img src="/images/icons/专家顾问图标.png" alt="专家顾问" class="icon-img">
                <div class="icon-glow"></div>
              </div>
                <div class="advantage-content">
                  <div class="title-bilingual">
                    <h4 class="title-main">{{ t('company.teamDetails.advantages.advisory.title') }}</h4>
                    
                    <span class="title-en">{{ t('company.teamDetails.advantages.advisory.titleEn') }}</span>
                  </div>
                  <div class="content-bilingual">
                    <p class="content-main">{{ t('company.teamDetails.advantages.advisory.description') }}</p>
                    <p class="content-en">{{ t('company.teamDetails.advantages.advisory.descriptionEn') }}</p>
                  </div>
                </div>
              </div>
              
              <div class="advantage-item">
                <div class="icon-wrapper">
                <img src="/images/icons/项目资源图标.png" alt="项目资源" class="icon-img">
                <div class="icon-glow"></div>
              </div>
                <div class="advantage-content">
                  <div class="title-bilingual">
                    <h4 class="title-main">{{ t('company.teamDetails.advantages.resources.title') }}</h4>
                    
                    <span class="title-en">{{ t('company.teamDetails.advantages.resources.titleEn') }}</span>
                  </div>
                  <div class="content-bilingual">
                    <p class="content-main">{{ t('company.teamDetails.advantages.resources.description') }}</p>
                    <p class="content-en">{{ t('company.teamDetails.advantages.resources.descriptionEn') }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          

        </div>
        
        <div class="advisors-section">
          <h3 class="title-level-3">{{ t('company.teamDetails.advisors.title') }}</h3>
          <div class="advisors-grid">
            <div class="advisor-card">
              <div class="advisor-avatar">{{ t('company.teamDetails.advisors.shen.avatar') }}</div>
              <h4 class="title-level-4">{{ t('company.teamDetails.advisors.shen.name') }}</h4>
              <p class="advisor-title">{{ t('company.teamDetails.advisors.shen.title') }}</p>
              <p class="advisor-bio">{{ t('company.teamDetails.advisors.shen.bio') }}</p>
            </div>
            
            <div class="advisor-card">
              <div class="advisor-avatar">{{ t('company.teamDetails.advisors.experts.avatar') }}</div>
              <h4 class="title-level-4">{{ t('company.teamDetails.advisors.experts.name') }}</h4>
              <p class="advisor-title">{{ t('company.teamDetails.advisors.experts.title') }}</p>
              <p class="advisor-bio">{{ t('company.teamDetails.advisors.experts.bio') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Funding Section -->
    <section id="funding-status" class="funding-section">
      <div class="container">
        <div class="section-header">
          <div class="title-bilingual">
            <h2 class="title-main">{{ t('company.funding.title') }}</h2>
            
            <span class="title-en">{{ t('company.funding.titleEn') }}</span>
          </div>
          <div class="content-bilingual">
            <p class="content-main">{{ t('company.funding.description') }}</p>
            <p class="content-en">{{ t('company.funding.descriptionEn') }}</p>
          </div>
        </div>
        
        <div class="funding-timeline horizontal-timeline">
          
          <div class="timeline-item">
            <div class="timeline-content">
              <div class="title-bilingual">
                <h3 class="title-main">{{ t('company.funding.rounds.seed.title') }}</h3>
                <span class="title-en">{{ t('company.funding.rounds.seed.titleEn') }}</span>
              </div>
              <div class="funding-stats">
                <span class="funding-amount">{{ t('company.funding.rounds.seed.amount') }}</span>
                <span class="funding-date">{{ t('company.funding.rounds.seed.date') }}</span>
              </div>
              <div class="content-bilingual">
                <p class="content-main">{{ t('company.funding.rounds.seed.description') }}</p>
              </div>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-content">
              <div class="title-bilingual">
                <h3 class="title-main">{{ t('company.funding.rounds.seedPlus.title') }}</h3>
                <span class="title-en">{{ t('company.funding.rounds.seedPlus.titleEn') }}</span>
              </div>
              <div class="funding-stats">
                <span class="funding-amount">{{ t('company.funding.rounds.seedPlus.amount') }}</span>
                <span class="funding-date">{{ t('company.funding.rounds.seedPlus.date') }}</span>
              </div>
              <div class="content-bilingual">
                <p class="content-main">{{ t('company.funding.rounds.seedPlus.description') }}</p>

              </div>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-content">
              <div class="title-bilingual">
                <h3 class="title-main">{{ t('company.funding.rounds.seriesA.title') }}</h3>
                <span class="title-en">{{ t('company.funding.rounds.seriesA.titleEn') }}</span>
              </div>
              <div class="funding-stats">
                <span class="funding-amount">{{ t('company.funding.rounds.seriesA.amount') }}</span>
                <span class="funding-date">{{ t('company.funding.rounds.seriesA.date') }}</span>
              </div>
              <div class="content-bilingual">
                <p class="content-main">{{ t('company.funding.rounds.seriesA.description') }}</p>
              </div>
            </div>
          </div>
          
          <div class="timeline-item active">
            <div class="timeline-content">
              <div class="title-bilingual">
                <h3 class="title-main">{{ t('company.funding.rounds.preAngel.title') }}</h3>
                <span class="title-en">{{ t('company.funding.rounds.preAngel.titleEn') }}</span>
              </div>
              <div class="funding-stats">
                <span class="funding-amount">{{ t('company.funding.rounds.preAngel.amount') }}</span>
                <span class="funding-date">{{ t('company.funding.rounds.preAngel.date') }}</span>
              </div>
              <div class="content-bilingual">
                <p class="content-main">{{ t('company.funding.rounds.preAngel.description') }}</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>

    <!-- Development Milestones Section -->
    <section id="development-history" class="milestones">
      <div class="container">
        <div class="section-header">
          <div class="title-bilingual">
            <h2 class="title-main">{{ t('company.milestones.title') }}</h2>
            
            <span class="title-en">{{ t('company.milestones.titleEn') }}</span>
          </div>
          <div class="content-bilingual">
            <p class="content-main">{{ t('company.milestones.description') }}</p>
            <p class="content-en">{{ t('company.milestones.descriptionEn') }}</p>
          </div>
        </div>
        
        <div class="milestones-grid">
          <div class="milestone-card">
            <div class="milestone-date">{{ t('company.milestones.items.founded.date') }}</div>
            <div class="title-bilingual">
              <h3 class="title-main">{{ t('company.milestones.items.founded.title') }}</h3>
              
              <span class="title-en">{{ t('company.milestones.items.founded.titleEn') }}</span>
            </div>
            <div class="content-bilingual">
              <p class="content-main">{{ t('company.milestones.items.founded.description') }}</p>
              <p class="content-en">{{ t('company.milestones.items.founded.descriptionEn') }}</p>
            </div>
          </div>
          
          <div class="milestone-card">
            <div class="milestone-date">{{ t('company.milestones.items.launch.date') }}</div>
            <div class="title-bilingual">
              <h3 class="title-main">{{ t('company.milestones.items.launch.title') }}</h3>
              
              <span class="title-en">{{ t('company.milestones.items.launch.titleEn') }}</span>
            </div>
            <div class="content-bilingual">
              <p class="content-main">{{ t('company.milestones.items.launch.description') }}</p>
              <p class="content-en">{{ t('company.milestones.items.launch.descriptionEn') }}</p>
            </div>
          </div>
          
          <div class="milestone-card">
            <div class="milestone-date">{{ t('company.milestones.items.breakthrough.date') }}</div>
            <div class="title-bilingual">
              <h3 class="title-main">{{ t('company.milestones.items.breakthrough.title') }}</h3>
              
              <span class="title-en">{{ t('company.milestones.items.breakthrough.titleEn') }}</span>
            </div>
            <div class="content-bilingual">
              <p class="content-main">{{ t('company.milestones.items.breakthrough.description') }}</p>
              <p class="content-en">{{ t('company.milestones.items.breakthrough.descriptionEn') }}</p>
            </div>
          </div>
          
          <div class="milestone-card">
            <div class="milestone-date">{{ t('company.milestones.items.validation.date') }}</div>
            <div class="title-bilingual">
              <h3 class="title-main">{{ t('company.milestones.items.validation.title') }}</h3>
              
              <span class="title-en">{{ t('company.milestones.items.validation.titleEn') }}</span>
            </div>
            <div class="content-bilingual">
              <p class="content-main">{{ t('company.milestones.items.validation.description') }}</p>
              <p class="content-en">{{ t('company.milestones.items.validation.descriptionEn') }}</p>
            </div>
          </div>
          
          <div class="milestone-card">
            <div class="milestone-date">{{ t('company.milestones.items.expansion.date') }}</div>
            <div class="title-bilingual">
              <h3 class="title-main">{{ t('company.milestones.items.expansion.title') }}</h3>
              
              <span class="title-en">{{ t('company.milestones.items.expansion.titleEn') }}</span>
            </div>
            <div class="content-bilingual">
              <p class="content-main">{{ t('company.milestones.items.expansion.description') }}</p>
              <p class="content-en">{{ t('company.milestones.items.expansion.descriptionEn') }}</p>
            </div>
          </div>
          
          <div class="milestone-card future">
            <div class="milestone-date">{{ t('company.milestones.items.future.date') }}</div>
            <div class="title-bilingual">
              <h3 class="title-main">{{ t('company.milestones.items.future.title') }}</h3>
              
              <span class="title-en">{{ t('company.milestones.items.future.titleEn') }}</span>
            </div>
            <div class="content-bilingual">
              <p class="content-main">{{ t('company.milestones.items.future.description') }}</p>
              <p class="content-en">{{ t('company.milestones.items.future.descriptionEn') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

     <!-- Contact Section -->
     <section class="contact-section">
      <div class="container">
        <div class="contact-content">
          <div class="contact-info">
            <h2 class="section-title">{{ t('company.contact.title') }}</h2>
            <p class="contact-description">
              {{ t('company.contact.description') }}
            </p>
            
            <div class="contact-details">
              <div class="contact-item">
                <div class="contact-icon">
                  <svg viewBox="0 0 24 24" class="icon">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div class="contact-text">
                  <div class="contact-label">{{ t('company.contact.address.label') }}</div>
                  <div class="contact-value">{{ t('company.contact.address.value') }}</div>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">
                  <svg viewBox="0 0 24 24" class="icon">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div class="contact-text">
                  <div class="contact-label">{{ t('company.contact.email.label') }}</div>
                  <div class="contact-value">{{ t('company.contact.email.value') }}</div>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">
                  <svg viewBox="0 0 24 24" class="icon">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div class="contact-text">
                  <div class="contact-label">{{ t('company.contact.phone.label') }}</div>
                  <div class="contact-value">{{ t('company.contact.phone.value') }}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="contact-form-wrapper">
            <form class="contact-form glass-card" @submit.prevent="submitForm">
              <h3 class="title-level-3">{{ t('company.contact.form.title') }}</h3>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="firstname">{{ t('company.contact.form.firstname.label') }} *</label>
                  <input 
                    type="text" 
                    id="firstname" 
                    v-model="form.firstname" 
                    required 
                    :placeholder="t('company.contact.form.firstname.placeholder')"
                    class="form-input"
                    :class="{ 'error': formErrors.firstname }"
                  >
                  <div v-if="formErrors.firstname" class="error-message">{{ formErrors.firstname }}</div>
                </div>
                <div class="form-group">
                  <label for="lastname">{{ t('company.contact.form.lastname.label') }} *</label>
                  <input 
                    type="text" 
                    id="lastname" 
                    v-model="form.lastname" 
                    required 
                    :placeholder="t('company.contact.form.lastname.placeholder')"
                    class="form-input"
                    :class="{ 'error': formErrors.lastname }"
                  >
                  <div v-if="formErrors.lastname" class="error-message">{{ formErrors.lastname }}</div>
                </div>
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="email">{{ t('company.contact.form.email.label') }} *</label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="form.email" 
                    required 
                    :placeholder="t('company.contact.form.email.placeholder')"
                    class="form-input"
                    :class="{ 'error': formErrors.email }"
                  >
                  <div v-if="formErrors.email" class="error-message">{{ formErrors.email }}</div>
                </div>
                <div class="form-group">
                  <label for="phone">{{ t('company.contact.form.phone.label') }} *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    v-model="form.phone" 
                    required 
                    :placeholder="t('company.contact.form.phone.placeholder')"
                    class="form-input"
                    :class="{ 'error': formErrors.phone }"
                  >
                  <div v-if="formErrors.phone" class="error-message">{{ formErrors.phone }}</div>
                </div>
              </div>
              
              <div class="form-group">
                <label for="message">{{ t('company.contact.form.message.label') }} *</label>
                <textarea 
                  id="message" 
                  v-model="form.other" 
                  required 
                  :placeholder="t('company.contact.form.message.placeholder')"
                  class="form-textarea"
                  :class="{ 'error': formErrors.message }"
                ></textarea>
                <div v-if="formErrors.message" class="error-message">{{ formErrors.message }}</div>
              </div>
              
              <div class="form-group checkbox-group">
                <input type="checkbox" id="agree" v-model="form.agree" required class="form-checkbox">
                <label for="agree" class="checkbox-label">
                  {{ t('company.contact.form.agree') }}
                  <a href="#" class="form-link">{{ t('company.contact.form.terms') }}</a>
                  和
                  <a href="#" class="form-link">{{ t('company.contact.form.privacy') }}</a>
                </label>
              </div>
              
              <div v-if="submitError" class="form-error">
                {{ submitError }}
              </div>
              
              <div v-if="submitSuccess" class="form-success">
                {{ submitSuccess }}
              </div>
              
              <button type="submit" class="btn btn-primary btn-lg form-submit" :disabled="isSubmitting">
                <span v-if="isSubmitting">{{ t('company.contact.form.submitting') }}</span>
                <span v-else>{{ t('company.contact.form.submit') }}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    
    <AppFooter />
  </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import { sendContactForm, validateContactForm } from '@/services/contact.js'

const { t, tm } = useI18n()

// 计算属性处理数组类型的翻译
const ctoHighlights = computed(() => {
  const highlights = tm('company.team.cto.highlights')
  return Array.isArray(highlights) ? highlights : []
})

const ceoHighlights = computed(() => {
  const highlights = tm('company.team.ceo.highlights')
  return Array.isArray(highlights) ? highlights : []
})

// 表单数据
const form = reactive({
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  other: '',
  agree: false
})

// 表单状态
const formErrors = ref({})
const isSubmitting = ref(false)
const submitError = ref('')
const submitSuccess = ref('')

// 重置表单
const resetForm = () => {
  Object.assign(form, {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    other: '',
    agree: false
  })
  formErrors.value = {}
  submitError.value = ''
  submitSuccess.value = ''
}

// 提交表单
const submitForm = async () => {
  // 清除之前的错误和成功消息
  formErrors.value = {}
  submitError.value = ''
  submitSuccess.value = ''

  // 验证表单
  const validation = validateContactForm(form)
  if (!validation.isValid) {
    formErrors.value = validation.errors
    submitError.value = t('company.contact.form.error.validation')
    return
  }

  if (!form.agree) {
    submitError.value = t('company.contact.form.error.terms')
    return
  }

  try {
    isSubmitting.value = true
    
    // 发送到飞书
    const result = await sendContactForm({
      firstname: form.firstname.trim(),
      lastname: form.lastname.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      other: form.other.trim()
    })

    if (result.success) {
      submitSuccess.value = t('company.contact.form.success')
      resetForm()
      
      // 5秒后清除成功消息
      setTimeout(() => {
        submitSuccess.value = ''
      }, 5000)
    } else {
      submitError.value = result.error || t('company.contact.form.error.network')
    }
  } catch (error) {
    console.error('Submit form error:', error)
    submitError.value = t('company.contact.form.error.network')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
/* ===== Page Layout ===== */
.company-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* ===== Hero Section ===== */
.hero {
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

.hero-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.hero-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.1) 1px, transparent 0);
  background-size: 20px 20px;
  animation: float 20s ease-in-out infinite;
}

.hero-content {
  text-align: center;
  color: var(--text-white);
  max-width: 1200px;
  margin: 0 auto;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  padding: var(--space-2) var(--space-4);
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-full);
  backdrop-filter: var(--glass-backdrop);
  -webkit-backdrop-filter: var(--glass-backdrop);
  margin-bottom: var(--space-6);
  animation: fadeInUp 0.6s var(--ease-out);
}

.badge-text {
  font-size: var(--font-sm);
  font-weight: 500;
  color: var(--text-white-secondary);
}

.hero-title {
  font-size: var(--font-5xl);
  font-weight: 800;
  line-height: var(--leading-tight);
  margin-bottom: var(--space-6);
  animation: fadeInUp 0.8s var(--ease-out);
}

.title-line {
  display: block;
}

.title-highlight {
  background: linear-gradient(45deg, #ffecd2, #fcb69f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: var(--font-lg);
  line-height: var(--leading-relaxed);
  color: var(--text-white-secondary);
  max-width: 600px;
  margin: 0 auto;
  animation: fadeInUp 1s var(--ease-out);
}

/* Hero section文字颜色修复 */
.hero .company-super-title .company-main-title,
.hero .company-super-title .company-future-title {
  color: var(--text-white) !important;
}

.hero .company-super-title .company-english-line {
  color: var(--text-white-secondary) !important;
}

.hero .hero-description .content-main,
.hero .hero-description .content-en {
  color: var(--text-white-secondary) !important;
}

/* ===== Company Introduction ===== */
.company-intro {
  padding: var(--space-32) 0;
  background: var(--bg-secondary);
}

.intro-content {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
}


.intro-description {
  font-size: var(--font-lg);
  line-height: var(--leading-relaxed);
  color: var(--text-secondary);
  margin-bottom: var(--space-12);
}

.company-stats {
  display: flex;
  justify-content: center;
  gap: var(--space-12);
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: var(--font-4xl);
  font-weight: 800;
  color: var(--primary-color);
  margin-bottom: var(--space-2);
}

.stat-label {
  font-size: var(--font-sm);
  color: var(--text-tertiary);
  font-weight: 500;
}

/* ===== Team Section ===== */
.team-section {
  padding: var(--space-32) 0;
  background: var(--bg-primary);
}

.section-header {
  text-align: center;
  margin-bottom: var(--space-16);
}

.leadership-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: var(--space-8);
  margin-bottom: var(--space-20);
}

.leader-card {
  padding: var(--space-8);
  transition: all var(--duration-normal) var(--ease-out);
}

.leader-card:hover {
  transform: translateY(-8px);
}

.leader-photo {
  position: relative;
  width: 150px;
  height: 200px;
  margin: 0 auto var(--space-6);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.leader-avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.photo-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  display: flex;
  align-items: flex-end;
  padding: var(--space-4);
  opacity: 0;
  transition: opacity var(--duration-normal) var(--ease-out);
}

.leader-card:hover .photo-overlay {
  opacity: 1;
}

.overlay-content {
  color: var(--text-white);
}

.leader-role {
  font-size: var(--font-sm);
  font-weight: 500;
}

.leader-info {
  text-align: center;
}

.title-level-3{
  margin-bottom: 16px;
}

.leader-name {
  font-size: var(--font-xl);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--space-1);
}

.leader-title {
  font-size: var(--font-sm);
  color: var(--primary-color);
  font-weight: 600;
  margin-bottom: var(--space-4);
}

.leader-bio {
  color: var(--text-secondary);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-4);
}

.leader-highlights {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-2);
  margin-bottom: var(--space-4);
}

.highlight-tag {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-full);
  padding: var(--space-1) var(--space-3);
  font-size: var(--font-xs);
  color: var(--primary-color);
  backdrop-filter: var(--glass-backdrop);
  -webkit-backdrop-filter: var(--glass-backdrop);
}

.leader-achievements {
  display: flex;
  justify-content: center;
  gap: var(--space-6);
}

.achievement-item {
  text-align: center;
}

.achievement-number {
  display: block;
  font-size: var(--font-2xl);
  font-weight: 700;
  color: var(--primary-color);
}

.achievement-label {
  font-size: var(--font-xs);
  color: var(--text-tertiary);
}

/* ===== Team Features ===== */
.team-features {
  margin-bottom: var(--space-16);
  padding: var(--space-8);
  text-align: center;
}

.features-title {
  font-size: var(--font-xl);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--space-2);
}

.features-subtitle {
  color: var(--text-secondary);
  margin-bottom: var(--space-8);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-6);
}

.feature-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.feature-icon {
  width: 60px;
  height: 60px;
  background: var(--primary-color);
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-4);
  box-shadow: var(--shadow-medium);
}

.icon-number {
  font-size: var(--font-xl);
  font-weight: 700;
  color: var(--text-white);
}

.feature-content h4 {
  font-size: var(--font-base);
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-1);
}

.feature-content p {
  font-size: var(--font-sm);
  color: var(--text-secondary);
}

/* ===== Other Members ===== */
.other-members {
  text-align: center;
}

.members-title {
  font-size: var(--font-xl);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--space-8);
}

.members-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-6);
}

.member-card {
  padding: var(--space-6);
  text-align: center;
  transition: all var(--duration-normal) var(--ease-out);
}

.member-card:hover {
  transform: translateY(-4px);
}

.member-role {
  font-size: var(--font-base);
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: var(--space-2);
}

.member-description {
  color: var(--text-secondary);
  line-height: var(--leading-normal);
}

/* ===== Contact Section ===== */
.contact-section {
  padding: var(--space-32) 0;
  background: var(--bg-secondary);
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  align-items: start;
}

.contact-info {
  max-width: 500px;
}

.contact-description {
  font-size: var(--font-lg);
  color: var(--text-secondary);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-8);
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.contact-item {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}

.contact-icon {
  width: 50px;
  height: 50px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: var(--glass-backdrop);
  -webkit-backdrop-filter: var(--glass-backdrop);
}

.contact-icon .icon {
  width: 24px;
  height: 24px;
  fill: var(--primary-color);
}

.contact-text {
  flex: 1;
}

.contact-label {
  font-size: var(--font-sm);
  color: var(--text-tertiary);
  margin-bottom: var(--space-1);
}

.contact-value {
  font-size: var(--font-base);
  color: var(--text-primary);
  font-weight: 500;
}

/* ===== Contact Form ===== */
.contact-form-wrapper {
  position: sticky;
  top: var(--space-8);
}

.contact-form {
  padding: var(--space-8);
}

.form-title {
  font-size: var(--font-xl);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--space-6);
  text-align: center;
}

.form-group {
  margin-bottom: var(--space-4);
}

.form-group label {
  display: block;
  font-size: var(--font-sm);
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: var(--space-2);
}

.form-input,
.form-textarea {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-md);
  font-size: var(--font-sm);
  color: var(--text-primary);
  background: var(--bg-primary);
  transition: all var(--duration-normal) var(--ease-out);
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: var(--text-tertiary);
  opacity: 0.7;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.form-textarea {
  resize: vertical;
  min-height: 100px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4);
}

.checkbox-group {
  display: flex;
  align-items: flex-start;
  gap: var(--space-2);
}

.form-checkbox {
  width: 18px;
  height: 18px;
  margin-top: 2px;
}

.checkbox-label {
  font-size: var(--font-sm);
  color: var(--text-secondary);
  line-height: var(--leading-normal);
  cursor: pointer;
}

.form-link {
  color: var(--primary-color);
  text-decoration: none;
}

.form-link:hover {
  text-decoration: underline;
}

.form-submit {
  width: 100%;
  margin-top: var(--space-4);
  transition: all var(--duration-normal) var(--ease-out);
}

.form-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.form-submit:disabled:hover {
  transform: none;
  box-shadow: var(--shadow-medium);
}

/* ===== Form Validation Styles ===== */
.form-input.error,
.form-textarea.error {
  border-color: #ef4444;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

.error-message {
  color: #ef4444;
  font-size: var(--font-xs);
  margin-top: var(--space-1);
  display: flex;
  align-items: center;
  gap: var(--space-1);
}

.form-error {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: var(--radius-md);
  padding: var(--space-3);
  color: #dc2626;
  font-size: var(--font-sm);
  margin-bottom: var(--space-4);
  text-align: center;
}

.form-success {
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: var(--radius-md);
  padding: var(--space-3);
  color: #16a34a;
  font-size: var(--font-sm);
  margin-bottom: var(--space-4);
  text-align: center;
  animation: slideInFromTop 0.3s var(--ease-out);
}

@keyframes slideInFromTop {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ===== Animations ===== */
.leader-card {
  animation: fadeInUp 0.6s var(--ease-out);
}

.leader-card:nth-child(1) { animation-delay: 0.1s; }
.leader-card:nth-child(2) { animation-delay: 0.2s; }

.feature-item {
  animation: fadeInUp 0.6s var(--ease-out);
}

.feature-item:nth-child(1) { animation-delay: 0.1s; }
.feature-item:nth-child(2) { animation-delay: 0.2s; }
.feature-item:nth-child(3) { animation-delay: 0.3s; }

.member-card {
  animation: fadeInScale 0.6s var(--ease-out);
}

.member-card:nth-child(1) { animation-delay: 0.1s; }
.member-card:nth-child(2) { animation-delay: 0.2s; }
.member-card:nth-child(3) { animation-delay: 0.3s; }

/* ===== Responsive Design ===== */
@media (max-width: 1024px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: var(--space-12);
  }
  
  .leadership-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero {
    min-height: 60vh;
    padding: var(--space-20) 0;
  }
  
  .hero-title {
    font-size: var(--font-4xl);
  }
  
  .company-stats {
    gap: var(--space-4);
  }
  
  .stat-item {
    flex: 1;
    min-width: 0;
  }
  
  .stat-number {
    font-size: var(--font-2xl);
  }
  
  .title-bilingual {
    display: flex;
    align-items: center;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .members-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-form-wrapper {
    position: static;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: var(--font-3xl);
  }
  
  .leadership-grid {
    gap: var(--space-6);
  }
  
  .leader-highlights {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--space-2);
  }
  
  .highlight-tag {
    flex: 0 0 calc(50% - var(--space-1));
    text-align: center;
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

/* ===== Company Details Section ===== */
.company-details {
  padding: var(--space-32) 0;
  background: var(--bg-secondary);
}

.details-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-6);
}

.detail-card {
  background: var(--bg-primary);
  border-radius: var(--radius-2xl);
  padding: var(--space-8);
  text-align: center;
  border: 1px solid var(--neutral-200);
}

.detail-icon {
  margin-bottom: var(--space-4);
  color: var(--primary-color);
  font-size: var(--font-sm);
}

.detail-card h3 {
  font-size: var(--font-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
  margin-bottom: var(--space-3);
}

.detail-en {
  color: var(--text-tertiary);
  font-size: var(--font-sm);
  font-style: italic;
}

.detail-description {
  color: var(--text-secondary);
  font-size: var(--font-sm);
}

/* ===== Team Details Section ===== */
.team-details {
  padding: var(--space-32) 0;
  background: var(--bg-primary);
}

.team-overview {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--space-12);
  margin-bottom: var(--space-16);
}

.team-advantages {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-6);
  margin-top: var(--space-8);
}

.advantage-item {
  display: flex;
  gap: var(--space-4);
  align-items: flex-start;
}

.advantage-icon {
  color: var(--primary-color);
  font-size: var(--font-sm);
  flex-shrink: 0;
}

.advantage-content h4 {
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
  margin-bottom: var(--space-2);
}

.team-placeholder {
  background: var(--neutral-100);
  border: 2px dashed var(--neutral-300);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  color: var(--neutral-500);
  text-align: center;
  min-height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.advisors-section h3 {
  font-size: var(--font-2xl);
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
  margin-bottom: var(--space-8);
  text-align: center;
}

.advisors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-8);
}

.advisor-card {
  background: var(--glass-bg);
  border-radius: var(--radius-2xl);
  padding: var(--space-8);
  text-align: center;
  backdrop-filter: var(--glass-backdrop);
  border: 1px solid var(--glass-border);
}

.advisor-avatar {
  width: 100px;
  height: 100px;
  background: var(--neutral-100);
  border: 2px dashed var(--neutral-300);
  border-radius: var(--radius-full);
  margin: 0 auto var(--space-4);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--neutral-500);
  font-size: var(--font-xs);
}

.advisor-card h4 {
  font-size: var(--font-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
  margin-bottom: var(--space-2);
}

.advisor-title {
  color: var(--primary-color);
  font-weight: var(--font-weight-medium);
  margin-bottom: var(--space-3);
}

/* ===== Funding Section ===== */
.funding-section {
  padding: var(--space-32) 0;
  background: var(--bg-secondary);
}

.funding-timeline {
  position: relative;
  margin-bottom: var(--space-16);
}

/* ===== 横向时间轴样式 ===== */
.horizontal-timeline {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  position: relative;
  margin: var(--space-16) 0;
  min-height: 400px;
  overflow-x: auto;
  padding: var(--space-12) var(--space-4);
}

.horizontal-timeline .timeline-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  max-width: 250px;
  margin-bottom: 0;
  gap: var(--space-4);
  position: relative;
  z-index: 2;
}

.horizontal-timeline .timeline-marker {
  flex-shrink: 0;
  order: 2;
}

.horizontal-timeline .timeline-content {
  order: 1;
  width: 100%;
  margin-bottom: var(--space-4);
  text-align: center;
  padding: var(--space-4);
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.horizontal-timeline .timeline-content h3 {
  font-size: var(--font-lg);
  margin-bottom: var(--space-2);
}

.horizontal-timeline .funding-stats {
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-3);
}

.horizontal-timeline .funding-amount,
.horizontal-timeline .funding-date {
  font-size: var(--font-xs);
  padding: var(--space-1) var(--space-2);
}

.horizontal-timeline .content-bilingual p {
  font-size: var(--font-sm);
  line-height: var(--leading-normal);
}

.horizontal-timeline .title-bilingual {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0px !important;
}

.horizontal-timeline .title-main {
  margin-bottom: 0;
  line-height: 1.1 !important;
}

.horizontal-timeline .title-en {
  line-height: 1.1;
  margin-top: 0;
}


.timeline-item {
  display: flex;
  gap: var(--space-6);
  margin-bottom: var(--space-8);
  align-items: flex-start;
}

.timeline-marker {
  flex-shrink: 0;
}

.timeline-number {
  width: 50px;
  height: 50px;
  background: var(--neutral-300);
  color: var(--text-white);
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: var(--font-weight-bold);
  position: relative;
  z-index: 3;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all var(--duration-normal) var(--ease-out);
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
}

.horizontal-timeline .timeline-number:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.timeline-item.active .timeline-number {
  background: var(--primary-color);
}

.timeline-content {
  background: var(--bg-primary);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  border: 1px solid var(--neutral-200);
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.timeline-content h3 {
  font-size: var(--font-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
  margin-bottom: var(--space-3);
}

.funding-stats {
  display: flex;
  gap: var(--space-4);
  margin-bottom: var(--space-3);
}

.funding-amount {
  background: var(--primary-color);
  color: var(--text-white);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  font-size: var(--font-sm);
  font-weight: var(--font-weight-medium);
}

.funding-date {
  background: var(--neutral-200);
  color: var(--text-secondary);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  font-size: var(--font-sm);
}

/* ===== Milestones Section ===== */
.milestones {
  padding: var(--space-32) 0;
  background: var(--bg-primary);
}

.milestones-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-6);
}

.milestone-card {
  background: var(--glass-bg);
  border-radius: var(--radius-2xl);
  padding: var(--space-6);
  backdrop-filter: var(--glass-backdrop);
  border: 1px solid var(--glass-border);
  transition: all var(--duration-normal) var(--ease-out);
}

.milestone-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.milestone-card.future {
  border: 2px solid var(--primary-color);
  background: linear-gradient(135deg, var(--glass-bg), var(--primary-color-light));
}

.milestone-date {
  background: var(--primary-color);
  color: var(--text-white);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-full);
  font-size: var(--font-sm);
  font-weight: var(--font-weight-medium);
  display: inline-block;
  margin-bottom: var(--space-4);
}

.milestone-card h3 {
  font-size: var(--font-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
  margin-bottom: var(--space-3);
}

/* ===== Responsive Design ===== */
@media (max-width: 768px) {
  .details-grid {
    grid-template-columns: 1fr;
  }
  
  .team-overview {
    grid-template-columns: 1fr;
  }
  
  .team-advantages {
    grid-template-columns: 1fr;
  }
  
  .advisors-grid {
    grid-template-columns: 1fr;
  }
  
  .timeline-item {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  /* 移动端横向时间轴适应 */
  .horizontal-timeline {
    flex-direction: column;
    align-items: stretch;
    min-height: auto;
    padding: var(--space-4);
  }
  
  .timeline-track {
    display: none;
  }
  
  .horizontal-timeline .timeline-item {
    flex-direction: row;
    max-width: none;
    margin-bottom: var(--space-6);
    gap: var(--space-4);
  }
  
  .horizontal-timeline .timeline-marker {
    order: 1;
    flex-shrink: 0;
  }
  
  .horizontal-timeline .timeline-content {
    order: 2;
    text-align: left;
    min-height: auto;
    margin-bottom: 0;
  }
  
  
  .milestones-grid {
    grid-template-columns: 1fr;
  }
  
  /* 移动端横向时间轴适应 */
  .horizontal-timeline {
    flex-direction: column;
    align-items: stretch;
    min-height: auto;
    padding: var(--space-4);
  }
  
  .timeline-track {
    display: none;
  }
  
  .horizontal-timeline .timeline-item {
    flex-direction: row;
    max-width: none;
    margin-bottom: var(--space-6);
    gap: var(--space-4);
  }
  
  .horizontal-timeline .timeline-marker {
    order: 1;
    flex-shrink: 0;
  }
  
  .horizontal-timeline .timeline-content {
    order: 2;
    text-align: left;
    min-height: auto;
    margin-bottom: 0;
  }
}
</style> 
