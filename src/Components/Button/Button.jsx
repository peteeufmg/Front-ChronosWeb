import { ButtonContainer, ButtonText } from "./style";

/**
 * Botão padrão do sistema web
 * @param {("Add"|"Close"|"Connect"|"Delete"|"Edit"|"Play"|"Restart"|"Salvar"|"View"|"Stop"|"update")} type - O tipo de botão. Pode ser um dos seguintes valores: "Add", "Close", "Connect", "Delete", "Edit", "Play", "Restart", "Salvar", "View".
 * @param {String} text O texto que o botão terá.
 * @param {function} onClick Função a ser executada ao clicar no botão.
 */
export default function Button({ type, text, onClick, disabled}) {

    let icon = "";

    if (type == "Add") {
        icon = <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.2143 10.448H15.1786V2.41224C15.1786 1.42619 14.3789 0.626526 13.3929 0.626526H11.6071C10.6211 0.626526 9.82143 1.42619 9.82143 2.41224V10.448H1.78571C0.799665 10.448 0 11.2476 0 12.2337V14.0194C0 15.0054 0.799665 15.8051 1.78571 15.8051H9.82143V23.8408C9.82143 24.8269 10.6211 25.6265 11.6071 25.6265H13.3929C14.3789 25.6265 15.1786 24.8269 15.1786 23.8408V15.8051H23.2143C24.2003 15.8051 25 15.0054 25 14.0194V12.2337C25 11.2476 24.2003 10.448 23.2143 10.448Z" fill="#EDA500"/>
        </svg>
    } else if (type == "Close") {
        icon = <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.2386 12.5L24.3459 5.39276C25.218 4.5206 25.218 3.10653 24.3459 2.23366L22.7663 0.654119C21.8942 -0.21804 20.4801 -0.21804 19.6072 0.654119L12.5 7.76136L5.39276 0.654119C4.5206 -0.21804 3.10653 -0.21804 2.23366 0.654119L0.654119 2.23366C-0.21804 3.10582 -0.21804 4.51989 0.654119 5.39276L7.76136 12.5L0.654119 19.6072C-0.21804 20.4794 -0.21804 21.8935 0.654119 22.7663L2.23366 24.3459C3.10582 25.218 4.5206 25.218 5.39276 24.3459L12.5 17.2386L19.6072 24.3459C20.4794 25.218 21.8942 25.218 22.7663 24.3459L24.3459 22.7663C25.218 21.8942 25.218 20.4801 24.3459 19.6072L17.2386 12.5Z" fill="#EDA500"/>
        </svg>        
    } else if (type == "Connect") {
        icon = <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.9479 9.05232C18.8652 11.9727 18.8252 16.6548 15.9655 19.5303C15.9601 19.5362 15.9537 19.5426 15.9479 19.5484L12.6666 22.8297C9.77258 25.7237 5.06414 25.7233 2.17053 22.8297C-0.723511 19.9361 -0.723511 15.2271 2.17053 12.3336L3.98235 10.5218C4.46282 10.0413 5.29026 10.3606 5.31506 11.0396C5.34671 11.905 5.50188 12.7743 5.78821 13.6139C5.88518 13.8982 5.8159 14.2126 5.60349 14.425L4.96448 15.064C3.59602 16.4325 3.5531 18.6607 4.90808 20.0426C6.27644 21.438 8.52556 21.4463 9.90442 20.0675L13.1857 16.7867C14.5622 15.4102 14.5564 13.1853 13.1857 11.8145C13.005 11.6342 12.8229 11.494 12.6807 11.3961C12.5801 11.327 12.4971 11.2354 12.4382 11.1286C12.3793 11.0217 12.3462 10.9025 12.3415 10.7806C12.3222 10.2646 12.505 9.73294 12.9127 9.32522L13.9408 8.29715C14.2103 8.02757 14.6332 7.99446 14.9458 8.21262C15.3038 8.4626 15.6391 8.74358 15.9479 9.05232ZM22.8295 2.17039C19.9359 -0.723267 15.2274 -0.723657 12.3334 2.17039L9.05213 5.45164C9.04627 5.4575 9.03992 5.46384 9.03455 5.4697C6.17488 8.34529 6.13479 13.0274 9.05213 15.9477C9.36086 16.2565 9.69615 16.5374 10.0541 16.7874C10.3667 17.0055 10.7897 16.9724 11.0592 16.7029L12.0872 15.6748C12.4949 15.2671 12.6778 14.7354 12.6584 14.2194C12.6538 14.0975 12.6206 13.9783 12.5618 13.8715C12.5029 13.7646 12.4198 13.673 12.3192 13.6039C12.177 13.506 11.995 13.3658 11.8143 13.1855C10.4435 11.8147 10.4378 9.58982 11.8143 8.21331L15.0955 4.93254C16.4744 3.55369 18.7235 3.56199 20.0919 4.95745C21.4469 6.33928 21.404 8.56751 20.0355 9.93596L19.3965 10.575C19.1841 10.7874 19.1148 11.1018 19.2117 11.3861C19.4981 12.2257 19.6533 13.095 19.6849 13.9604C19.7097 14.6394 20.5371 14.9587 21.0176 14.4783L22.8294 12.6664C25.7235 9.77293 25.7235 5.06394 22.8295 2.17039Z" fill="#EDA500"/>
        </svg>        
    } else if (type == "Delete") {
        icon = <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.0347 1.56251H15.1917L14.734 0.649422C14.637 0.454214 14.4877 0.29001 14.3028 0.175281C14.1178 0.0605526 13.9046 -0.00014785 13.6871 8.56089e-06H8.12172C7.90474 -0.000827891 7.69191 0.0596462 7.50762 0.174502C7.32334 0.289359 7.17504 0.453951 7.07972 0.649422L6.62202 1.56251H0.779062C0.572442 1.56251 0.374284 1.64482 0.228182 1.79133C0.0820795 1.93784 0 2.13656 0 2.34376L0 3.90626C0 4.11346 0.0820795 4.31217 0.228182 4.45868C0.374284 4.6052 0.572442 4.68751 0.779062 4.68751H21.0347C21.2413 4.68751 21.4394 4.6052 21.5855 4.45868C21.7316 4.31217 21.8137 4.11346 21.8137 3.90626V2.34376C21.8137 2.13656 21.7316 1.93784 21.5855 1.79133C21.4394 1.64482 21.2413 1.56251 21.0347 1.56251ZM2.59038 22.8027C2.62754 23.3978 2.88942 23.9562 3.32273 24.3644C3.75603 24.7726 4.32817 24.9999 4.9227 25H16.891C17.4856 24.9999 18.0577 24.7726 18.491 24.3644C18.9243 23.9562 19.1862 23.3978 19.2233 22.8027L20.2556 6.25001H1.55812L2.59038 22.8027Z" fill="#EDA500"/>
        </svg>        
    } else if (type == "Edit") {
        icon = <svg width="29" height="26" viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.6859 4.76666L24.0963 9.17182C24.2822 9.3574 24.2822 9.6602 24.0963 9.84578L13.4173 20.5119L8.87966 21.015C8.27334 21.0833 7.75992 20.5705 7.82838 19.9649L8.33202 15.4328L19.0111 4.76666C19.1969 4.58108 19.5 4.58108 19.6859 4.76666ZM27.6071 3.64828L25.221 1.265C24.4777 0.522669 23.27 0.522669 22.5219 1.265L20.7909 2.99385C20.6051 3.17944 20.6051 3.48223 20.7909 3.66781L25.2014 8.07297C25.3872 8.25855 25.6904 8.25855 25.8762 8.07297L27.6071 6.34412C28.3504 5.5969 28.3504 4.39061 27.6071 3.64828ZM18.7764 17.611V22.5826H3.1294V6.95459H14.3659C14.5224 6.95459 14.669 6.8911 14.7815 6.78366L16.7374 4.83015C17.109 4.45898 16.8449 3.82898 16.3218 3.82898H2.34705C1.05128 3.82898 0 4.87899 0 6.17319V23.364C0 24.6582 1.05128 25.7083 2.34705 25.7083H19.5587C20.8545 25.7083 21.9058 24.6582 21.9058 23.364V15.6575C21.9058 15.1349 21.275 14.8761 20.9034 15.2423L18.9475 17.1958C18.8399 17.3082 18.7764 17.4547 18.7764 17.611Z" fill="#EDA500"/>
        </svg>
        
    } else if (type == "Play") {
        icon = <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.7218 10.4814L3.53501 0.320687C2.13859 -0.504474 0 0.296274 0 2.33721V22.6538C0 24.4847 1.98722 25.5882 3.53501 24.6703L20.7218 14.5144C22.255 13.6112 22.2598 11.3847 20.7218 10.4814Z" fill="#EDA500"/>
        </svg>
        
    } else if (type == "Restart") {
        icon = <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.24309 9.08616C0.707025 9.14457 0.29163 8.62665 0.46481 8.11611L3.04658 0.500914C3.23362 -0.0504889 3.956 -0.17794 4.32035 0.276104L6.2215 2.64531C7.93471 1.78811 9.83984 1.35664 11.7737 1.40104C14.335 1.46004 16.8076 2.35087 18.8179 3.93914C20.8282 5.52741 22.267 7.72668 22.917 10.2049C23.5671 12.683 23.393 15.3054 22.4211 17.6758C21.4491 20.0464 19.7322 22.0362 17.5295 23.3447C15.3269 24.6532 12.7582 25.2094 10.2116 24.9292C7.66506 24.649 5.27874 23.5477 3.4133 21.7916C1.72722 20.2045 0.549482 18.1603 0.0185841 15.9175C-0.075234 15.5211 0.196633 15.139 0.598162 15.0702L2.01296 14.8274C2.41449 14.7585 2.79271 15.0292 2.89464 15.4236C3.31343 17.0439 4.18258 18.5184 5.40841 19.6723C6.81376 20.9953 8.61135 21.8249 10.5299 22.036C12.4485 22.2471 14.3835 21.828 16.0429 20.8423C17.7023 19.8565 18.9958 18.3575 19.7279 16.5717C20.4602 14.7859 20.5913 12.8103 20.1017 10.9433C19.612 9.07642 18.528 7.41956 17.0135 6.22308C15.499 5.02646 13.6362 4.35542 11.7068 4.31102C10.4629 4.2824 9.23503 4.51518 8.09933 4.9856L9.73215 7.02039C10.0965 7.47458 9.81565 8.15211 9.23666 8.21509L1.24309 9.08616Z" fill="#EDA500"/>
        </svg>
        
    } else if (type == "Salvar") {
        icon = <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24.2155 5.46546L19.5345 0.784542C19.0322 0.282212 18.3509 3.71471e-06 17.6405 0H2.67857C1.19922 0 0 1.19922 0 2.67857V22.3214C0 23.8008 1.19922 25 2.67857 25H22.3214C23.8008 25 25 23.8008 25 22.3214V7.35949C25 6.64909 24.7178 5.96778 24.2155 5.46546ZM12.5 21.4286C10.5276 21.4286 8.92857 19.8296 8.92857 17.8571C8.92857 15.8847 10.5276 14.2857 12.5 14.2857C14.4724 14.2857 16.0714 15.8847 16.0714 17.8571C16.0714 19.8296 14.4724 21.4286 12.5 21.4286ZM17.8571 4.43527V10.0446C17.8571 10.4145 17.5573 10.7143 17.1875 10.7143H4.24107C3.87126 10.7143 3.57143 10.4145 3.57143 10.0446V4.24107C3.57143 3.87126 3.87126 3.57143 4.24107 3.57143H16.9933C17.1709 3.57143 17.3412 3.64196 17.4668 3.76758L17.661 3.96177C17.7232 4.02395 17.7725 4.09776 17.8062 4.17901C17.8398 4.26025 17.8572 4.34733 17.8571 4.43527Z" fill="#EDA500"/>
        </svg>
    } else if (type == "Stop") {
        icon = <svg width="18" height="25" viewBox="0 0 18 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 0C0.89543 0 0 0.89543 0 2V23C0 24.1046 0.89543 25 2 25H5C6.10457 25 7 24.1046 7 23V2C7 0.895431 6.10457 0 5 0H2ZM13 0C11.8954 0 11 0.89543 11 2V23C11 24.1046 11.8954 25 13 25H16C17.1046 25 18 24.1046 18 23V2C18 0.895431 17.1046 0 16 0H13Z" fill="#EDA500"/>
        </svg>        
    } else if (type == "View") {
        icon = <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24.66 22.4244L19.7915 17.5567C19.5717 17.337 19.2739 17.215 18.9613 17.215H18.1654C19.5131 15.4915 20.314 13.3237 20.314 10.9656C20.314 5.35576 15.7678 0.810303 10.157 0.810303C4.54623 0.810303 0 5.35576 0 10.9656C0 16.5754 4.54623 21.1208 10.157 21.1208C12.5156 21.1208 14.6837 20.3201 16.4074 18.9726V19.7684C16.4074 20.0809 16.5295 20.3787 16.7493 20.5984L21.6178 25.4661C22.0768 25.925 22.8191 25.925 23.2732 25.4661L24.6551 24.0844C25.1141 23.6255 25.1141 22.8833 24.66 22.4244ZM10.157 17.215C6.70459 17.215 3.90654 14.4223 3.90654 10.9656C3.90654 7.51375 6.69971 4.71617 10.157 4.71617C13.6094 4.71617 16.4074 7.50887 16.4074 10.9656C16.4074 14.4174 13.6143 17.215 10.157 17.215Z" fill="#EDA500"/>
        </svg>
    }else if (type == "update") {
        icon = <svg width="31" height="25" viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.09444 10.7143C8.78333 7.14286 11.8833 4.46429 15.5 4.46429C18.0833 4.46429 20.15 5.71429 21.5278 7.67857L24.4556 4.10714C22.3889 1.60714 19.1167 0 15.5 0C9.47222 0 4.47778 4.64286 3.61667 10.7143H0L6.02778 17.8571L12.0556 10.7143H8.09444ZM24.9722 7.14286L18.9444 14.2857H22.9056C22.0444 17.8571 19.1167 20.5357 15.5 20.5357C12.9167 20.5357 10.85 19.2857 9.47222 17.3214L6.54444 20.7143C8.61111 23.3929 11.8833 25 15.5 25C21.5278 25 26.5222 20.3571 27.3833 14.2857H31L24.9722 7.14286Z" fill="#EDA500"/>
        </svg>
        
    }
    

    return (
        <ButtonContainer disabled={disabled} onClick={onClick}>
            {icon}
            <ButtonText>{text}</ButtonText>
        </ButtonContainer>
    )
}