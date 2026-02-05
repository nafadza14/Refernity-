/**
 * Refernity Widget Embed
 * Usage: Copy-paste this script into your website
 */

(function() {
  'use strict';

  const API_URL = 'https://api.refernity.io';
  
  class RefernityWidget {
    constructor(config) {
      this.campaignId = config.campaignId;
      this.position = config.position || 'bottom-right';
      this.container = null;
      this.init();
    }

    async init() {
      // Fetch campaign data
      try {
        const response = await fetch(`${API_URL}/api/widget/${this.campaignId}`);
        if (!response.ok) throw new Error('Failed to load widget');
        
        this.data = await response.json();
        this.render();
        this.trackClick();
      } catch (error) {
        console.error('Refernity Widget Error:', error);
      }
    }

    render() {
      // Create container
      this.container = document.createElement('div');
      this.container.id = 'refernity-widget';
      this.container.innerHTML = this.getHTML();
      
      // Add styles
      this.addStyles();
      
      // Append to body
      document.body.appendChild(this.container);
      
      // Bind events
      this.bindEvents();
    }

    getHTML() {
      const { campaign } = this.data;
      return `
        <div class="refernity-widget-${this.position}">
          <button class="refernity-trigger" id="refernity-trigger">
            <span>🎁</span>
            <span class="refernity-trigger-text">Refer & Earn</span>
          </button>
          <div class="refernity-modal" id="refernity-modal" style="display: none;">
            <div class="refernity-modal-header">
              <h3>${campaign.name}</h3>
              <button class="refernity-close" id="refernity-close">×</button>
            </div>
            <div class="refernity-modal-body">
              <p class="refernity-reward">Earn ${campaign.rewardAmount} ${campaign.rewardCurrency} for each friend!</p>
              <div class="refernity-input-group">
                <input type="email" id="refernity-email" placeholder="Your friend's email" />
                <button id="refernity-submit">Send Invite</button>
              </div>
              <p class="refernity-powered">Powered by <a href="https://refernity.io" target="_blank">Refernity</a></p>
            </div>
          </div>
        </div>
      `;
    }

    addStyles() {
      const styles = document.createElement('style');
      styles.textContent = `
        #refernity-widget {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          z-index: 9999;
        }
        .refernity-widget-bottom-right {
          position: fixed;
          bottom: 20px;
          right: 20px;
        }
        .refernity-trigger {
          background: linear-gradient(135deg, #6B46C1, #3B82F6);
          color: white;
          border: none;
          border-radius: 50px;
          padding: 12px 24px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(107, 70, 193, 0.3);
          transition: transform 0.2s, box-shadow 0.2s;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .refernity-trigger:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(107, 70, 193, 0.4);
        }
        .refernity-modal {
          position: absolute;
          bottom: 70px;
          right: 0;
          width: 360px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          overflow: hidden;
        }
        .refernity-modal-header {
          background: linear-gradient(135deg, #6B46C1, #3B82F6);
          color: white;
          padding: 16px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .refernity-modal-header h3 {
          margin: 0;
          font-size: 18px;
        }
        .refernity-close {
          background: none;
          border: none;
          color: white;
          font-size: 24px;
          cursor: pointer;
          padding: 0;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .refernity-modal-body {
          padding: 20px;
        }
        .refernity-reward {
          font-size: 18px;
          font-weight: 600;
          color: #10B981;
          margin: 0 0 20px 0;
        }
        .refernity-input-group {
          display: flex;
          gap: 8px;
        }
        .refernity-input-group input {
          flex: 1;
          padding: 12px;
          border: 1px solid #E5E7EB;
          border-radius: 8px;
          font-size: 14px;
        }
        .refernity-input-group button {
          background: #10B981;
          color: white;
          border: none;
          border-radius: 8px;
          padding: 12px 20px;
          font-weight: 600;
          cursor: pointer;
        }
        .refernity-powered {
          text-align: center;
          font-size: 12px;
          color: #9CA3AF;
          margin-top: 16px;
        }
        .refernity-powered a {
          color: #6B46C1;
          text-decoration: none;
        }
      `;
      document.head.appendChild(styles);
    }

    bindEvents() {
      const trigger = document.getElementById('refernity-trigger');
      const modal = document.getElementById('refernity-modal');
      const close = document.getElementById('refernity-close');
      const submit = document.getElementById('refernity-submit');

      trigger.addEventListener('click', () => {
        modal.style.display = modal.style.display === 'none' ? 'block' : 'none';
      });

      close.addEventListener('click', () => {
        modal.style.display = 'none';
      });

      submit.addEventListener('click', () => {
        const email = document.getElementById('refernity-email').value;
        if (email) {
          this.sendInvite(email);
        }
      });
    }

    trackClick() {
      // Track widget impression
      fetch(`${API_URL}/api/track/click`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          referralCode: this.campaignId,
          utmSource: 'widget',
          userAgent: navigator.userAgent
        })
      });
    }

    async sendInvite(email) {
      // Implementation for sending invite
      alert(`Invite sent to ${email}!`);
    }
  }

  // Expose to global
  window.RefernityWidget = RefernityWidget;

  // Auto-initialize if config exists
  if (window.refernityConfig) {
    new RefernityWidget(window.refernityConfig);
  }
})();
