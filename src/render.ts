import { THEMES } from "../theme";

export function renderTrybeCard(grade: number, theme=THEMES.default, options = {}) {
    //TODO: unpack options here
    const title = "Meu perfil é nota:";

    const {
        title_color, 
        icon_color, 
        text_color, 
        bg_color, 
        empty_color,
        fill_color
    } = theme;

    const progress = 100 - grade;

    const icon = 'Not defined';
    const css = `
    .stat {
        font: 600 14px 'Segoe UI', Ubuntu, "Helvetica Neue", Sans-Serif; fill: ${title_color};
      }
      .stagger {
        opacity: 0;
        animation: fadeInAnimation 0.3s ease-in-out forwards;
      }
      .icon {
        fill: ${icon_color};
      }

`
    const iconSize = 100;
    const cardWidth = 630;
    const cardHeight = 170;
    const cardBorderRadius = 15;
    
    //TODO: insert icon here
    const iconSvg = `<svg data-testid="icon" class="icon" viewBox="0 0 16 16" version="1.1" width="16" height="16">
    ${icon}
    </svg>`

    return `
    <svg xmlns="http://www.w3.org/2000/svg" 
        width="${cardWidth}" 
        height="${cardHeight}"
        viewBox="0 0 ${cardWidth} ${cardHeight}"
        role="img"
    >        
        <!-- Rounded corner rectangle -->
        <rect x="0.5" y="0.5"
        height="99%"
        width="99%"
        fill="#${bg_color}"
        rx="${cardBorderRadius}"/>  
    
        <g transform="translate(25, 35)">
            <g transform="translate(0, 0)">
                <text xmlns="http://www.w3.org/2000/svg" x="120" y="42"
                    class="header"                     
                    data-testid="header">                    
                    ${title}
                </text>
            </g>
        </g>  
        
        <style xmlns="http://www.w3.org/2000/svg">
            @import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@600&display=swap');
            .header {                
                font-family: 'Epilogue', sans-serif;
                font-weight: semi-bold;
                font-size: 50px;
                fill: #${title_color};
                animation: fadeInAnimation 0.8s ease-in-out forwards;
            }

            img {
                position: relative;
                top: -38px;
                left: -615px;
            }
  
        </style>
    </svg>

    <img src="https://i.ibb.co/8g9qJtH/logo.png"  width="${iconSize}" height="${iconSize}"/>

    `;
}

// <g class="stagger" style="animation-delay: 50ms" transform="translate(25, 0)">
// ${iconSvg}
// <text class="stat">
//     Meu perfil é nota:
// </text>
// <text class="stat">
// ${grade}
// </text>
// </g>
// src="https://i.ibb.co/8g9qJtH/logo.png" 

// <style xmlns="http://www.w3.org/2000/svg"> 
//     .stat {
//       font: 600 14px 'Segoe UI', Ubuntu, "Helvetica Neue", Sans-Serif; fill: #434d58;
//     }
//     .stagger {
//       opacity: 0;
//       animation: fadeInAnimation 0.3s ease-in-out forwards;
//     }
//     .rank-text {
//       font: 800 24px 'Segoe UI', Ubuntu, Sans-Serif; fill: #434d58; 
//       animation: scaleInAnimation 0.3s ease-in-out forwards;
//     }
    
//     .not_bold { font-weight: 400 }
//     .bold { font-weight: 700 }
//     .icon {
//       fill: #4c71f2;
//       display: none;
//     }
    
//     .rank-circle-rim {
//       stroke: #2f80ed;
//       fill: none;
//       stroke-width: 6;
//       opacity: 0.2;
//     }
//     .rank-circle {
//       stroke: #2f80ed;
//       stroke-dasharray: 250;
//       fill: none;
//       stroke-width: 6;
//       stroke-linecap: round;
//       opacity: 0.8;
//       transform-origin: -10px 8px;
//       transform: rotate(-90deg);
//       animation: rankAnimation 1s forwards ease-in-out;
//     }
    
//     @keyframes rankAnimation {
//       from {
//         stroke-dashoffset: 251.32741228718345;
//       }
//       to {
//         stroke-dashoffset: 126.56584208315009;
//       }
//     }
  
  

          
//     /* Animations */
//     @keyframes scaleInAnimation {
//       from {
//         transform: translate(-5px, 5px) scale(0);
//       }
//       to {
//         transform: translate(-5px, 5px) scale(1);
//       }
//     }
//     @keyframes fadeInAnimation {
//       from {
//         opacity: 0;
//       }
//       to {
//         opacity: 1;
//       }
//     }</style>