import { THEMES } from "../theme";

export function renderTrybeCard(grade: number, theme=THEMES.default, options = {}) {
    //TODO: unpack options here
    const title = "Meu perfil é nota:";

    //unpack Theme options
    const {
        title_color,         
        text_good_color, 
        text_medium_color, 
        text_bad_color, 
        bg_color, 
        empty_color,
        fill_good_color,
        fill_medium_color,
        fill_bad_color,
        emoj_code_good
    } = theme;

    const iconSize = 100;
    const cardWidth = 630;
    const cardHeight = 170;
    const cardBorderRadius = 15;
    const progresseEmptyWidth = 445;
    const progressHeight = 20;
    const progressBorderRadius = 8;

    //Sanity check for strange grade values
    if (grade < 0)  grade = 0;
    else if (grade > 100)   grade = 100;
    
    grade = 100;

    //Calculates the progress to fill.
    const progresseFillWidth = ((progresseEmptyWidth * grade) / 100);

    return `
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="${cardWidth}" 
        height="${cardHeight}"
        viewBox="0 0 ${cardWidth} ${cardHeight}"
        role="img"
    >                
        <rect x="0.5" y="0.5"
        height="99%"
        width="99%"
        fill="#${bg_color}"
        rx="${cardBorderRadius}"/>  
    
        <g transform="translate(25, 35)">
            <g transform="translate(0, 0)">
                <text 
                    xmlns="http://www.w3.org/2000/svg" 
                    x="120" y="42"
                    class="header"                     
                    data-testid="header">                    
                    ${title}
                </text>
            </g>
        </g>  

        <g>
            <g>
            <rect 
                xmlns="http://www.w3.org/2000/svg" 
                mask="url(#rect-mask)" 
                data-testid="lang-progress" 
                x="144" y="105" 
                width="${progresseEmptyWidth}" 
                height="${progressHeight}" 
                fill="#${empty_color}"
                rx="${progressBorderRadius}"/>
            <rect 
                xmlns="http://www.w3.org/2000/svg" 
                mask="url(#rect-mask)" 
                data-testid="lang-progress" 
                x="144" y="105" 
                width="${progresseFillWidth}" 
                height="${progressHeight}" 
                fill="#${grade/10 >= 9? fill_good_color : (grade/10 >= 5? fill_medium_color : fill_bad_color) }"
                rx="${progressBorderRadius}"/>

            <text 
                xmlns="http://www.w3.org/2000/svg" 
                x="500" y="120"
                class="textPunctuation"                     
                data-testid="header">                    
                ${grade.toString().length == 1? '0'+(grade/10).toString() : (grade/10)}/10
            </text>

            <text 
                xmlns="http://www.w3.org/2000/svg" 
                x="550" y="133"
                class="emoj"                     
                data-testid="header">                    
                &#${emoj_code_good};
            </text>

            </g>
        </g>
        
        <style 
            xmlns="http://www.w3.org/2000/svg">
            @import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@600&display=swap');
            .header {                
                font-family: 'Epilogue', sans-serif;
                font-weight: semi-bold;
                font-size: 50px;
                fill: #${title_color};
                animation: fadeInAnimation 0.8s ease-in-out forwards;
            }
            .textPunctuation{
                font-family: 'Epilogue', sans-serif;
                font-weight: semi-bold;
                font-size: 15px;
                fill: #${grade/10 >= 9? text_good_color : (grade/10 >= 5? text_medium_color : text_bad_color) };
                animation: fadeInAnimation 0.8s ease-in-out forwards;
            }
            .emoj{
                font-size: 50px;
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