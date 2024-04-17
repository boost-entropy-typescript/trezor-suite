import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

import { useActiveColorScheme } from '@suite-native/theme';

export const DisconnectedTrezorSvg = (props: SvgProps) => {
    const colorScheme = useActiveColorScheme();
    const lineColor = colorScheme === 'dark' ? '#74DCB1' : '#0F6148';
    const fillColor = colorScheme === 'dark' ? '#092519' : '#F0F9F6';

    return (
        <Svg fill="none" viewBox="0 0 214 206" {...props}>
            <G clipPath="url(#a)">
                <Path
                    d="M142.82 111.04l6.72 6.33 1.414.743s5.492 4.547 8.091 2.871c2.598-1.677 8.983-7.366 8.983-7.366s11.867-10.56 12.188-10.917c.321-.356 4.002-3.98 8.104-12.298l20.828-35.671 2.944-5.13s2.267-2.286.367-4.34c-1.902-2.057-6.926-4.991-6.926-4.991s-4.526-2.027-12.309-3.497c-7.784-1.472-9.816-2.298-12.123-2.586s-5.848-.864-9.406 6.382l-14.397 24.866s-6.567 11.039-7.905 14.999c-1.078 3.19-5.392 16.442-7.184 22.19-.433 1.386-1.099 4.082-1.099 4.082s.083 2.313 1.712 4.335l-.002-.001zM14.307 29.709l2.9 21.73 5.788 35.595L36.854 158.3l4.93 19.255s6.905 15.037 23.049 10.925c16.144-4.113 33.832-9.373 33.832-9.373l23.385-10.143s11.47-5.217 8.926-18.841c-2.544-13.625-6.825-35.473-6.825-35.473l-8.456-43.192-9.232-45.575-3.823-14.062S98.114-.101 83.836.956c-14.281 1.057-42.713 4.27-42.713 4.27L28.136 8.108s-8.325 4.162-10.33 8.067c-2.006 3.905-3.493 9.51-3.5 13.533z"
                    fill={fillColor}
                />
                <Path
                    d="M145.18 113.25l-2.208 3.653-.044 3.047 1.088 1.662 1.591-.047 3.657-3.475-4.084-4.84z"
                    fill={fillColor}
                />
                <Path
                    d="M185.03 177.89c2.949-1.944 6.586-5.618 5.869-9.189-.637-3.174-3.053-5.103-5.869-6.949a4610.77 4610.77 0 00-5.669-3.704c-1.636-1.068-3.273-2.136-4.908-3.206 3.375-.4 6.429-1.687 7.986-4.503 3.83-6.925-3.089-15.186-10.836-16.912-3.791-.845-8.352-.27-10.916 2.408-2.71 2.831-1.988 7.129.311 10.207 2.306 3.091 5.899 5.322 9.332 7.453l.75.466c-6.365-.163-12.209-2.848-17.283-6.577-6.866-5.043-13.991-12.69-12.792-21.012.285-1.977 1.087-3.78 2.361-5.36.454-.563-.67-1.339-1.142-.781-2.614 3.09-3.434 7.044-2.6 10.98.841 3.971 3.262 7.536 6.127 10.665 2.992 3.269 6.583 6.114 10.471 8.471 2.972 1.801 6.005 3.203 9.455 3.946 2.124.459 4.59.758 7 .68 2.263 1.466 4.52 2.939 6.779 4.412l.551.36c.474.309.954.614 1.436.919 1.665 1.056 3.341 2.12 4.803 3.391 3.137 2.73 4.571 5.728 2.243 9.137-2.551 3.736-7.647 5.448-12.014 6.916l-.036.013c-.7.235-1.403.466-2.109.692-.157.051-.116.248-.075.445.039.188.078.376-.054.436a.128.128 0 00-.022.009l.011-.004.011-.005c.106-.029.077.174.047.383-.033.231-.067.47.082.407.975-.414 2.066-.808 3.203-1.219 2.517-.91 5.263-1.903 7.497-3.375zm-15.17-26.042c-3.674-2.361-7.714-4.955-9.196-8.866-.805-2.121-.751-4.505.811-6.222 1.395-1.534 3.623-2.304 5.816-2.485 4.026-.331 8.182 1.293 11.078 3.949 3.315 3.044 5.073 7.943 2.924 11.742-1.475 2.607-4.685 3.7-7.814 3.935l-2.148-1.101c-.479-.315-.972-.631-1.471-.952z"
                    clipRule="evenodd"
                    fill={lineColor}
                    fillRule="evenodd"
                />
                <Path
                    d="M47.181 4.905c7.266-.787 14.537-1.528 21.806-2.274 4.98-.512 9.99-1.092 15.001-1.015 4.671.071 9.17 1.012 13.011 3.777 4.474 3.222 6.274 9.057 7.433 14.176 2.516 11.114 4.753 22.296 6.985 33.475 4.02 20.155 7.962 40.323 11.923 60.49 1.727 8.81 3.45 17.623 5.187 26.434 1.052 5.327 2.596 10.48 1.43 15.917-1.167 5.435-4.225 9.57-8.587 12.555-2.786 1.907-5.895 2.949-9.043 4.104-7.461 2.738-15.006 5.258-22.46 8.017-.678.252-1.576.426-1.648 1.288-.098 1.157 1.283.817 1.486.654 0 0 0-.031.091 0 .086 0 .268-.124.354-.163.37-.166.973-.394 1.434-.577a157.609 157.609 0 014.903-1.821c4.365-1.548 8.736-3.076 13.097-4.633 3.121-1.116 6.313-2.152 9.348-3.496 4.588-2.031 8.661-5.84 10.9-10.315 1.706-3.416 2.477-7.28 2.295-11.087-.098-2.073-.583-4.08-.99-6.105a6867.084 6867.084 0 01-4.904-24.703c-4.064-20.632-8.095-41.27-12.198-61.896-1.544-7.76-3.088-15.52-4.695-23.267-.789-3.81-1.779-7.591-2.52-11.407-.955-4.924-2.014-9.995-4.674-14.332C99.73 4.76 95.756 2.057 91.292.879 85.565-.631 79.272.118 73.485.793a614.427 614.427 0 00-14.338 1.85 1366.57 1366.57 0 00-12.032 1.744c-.291.044-.226.55.072.518h-.006zM44.907 4.532c-4.249-.379-8.65.403-12.692 1.717s-7.7 3.461-10.077 7.002c-5.87 8.743-3.326 19.542-2.023 29.155 1.842 13.592 4.162 27.101 7.06 40.51 2.88 13.336 5.653 26.71 8.239 40.108 1.452 7.526 2.93 15.04 4.507 22.542s2.934 15.15 4.93 22.574c.137.51.866.287.78-.214-1.116-6.468-2.607-12.872-3.77-19.335-1.163-6.463-2.27-13.038-3.448-19.548-2.354-12.994-4.564-26.003-7.314-38.92-2.743-12.893-5.504-25.774-7.741-38.768-1.095-6.35-2.044-12.722-2.97-19.098-.612-4.233-.74-8.242.494-12.402.845-2.842 1.955-5.696 4.136-7.79 1.75-1.68 3.954-2.862 6.2-3.756 4.43-1.761 9.197-2.052 13.746-3.342.253-.071.185-.415-.059-.436h.003zM45.25 169.95c1.27 7.46 6.117 14.853 13.454 17.635 8.197 3.109 17.408-.864 25.204-3.36.756-.243.428-1.252-.318-1.151-3.862.527-7.638 1.551-11.44 2.377-3.886.844-8.14 1.465-12.041.373-7.236-2.028-12.204-9.231-14.052-16.099-.143-.527-.896-.297-.807.222v.003z"
                    fill={lineColor}
                />
                <Path
                    d="M113.73 76.121c3.523 18.222 7.096 36.435 10.664 54.648 1.062 5.421 2.228 10.833 3.192 16.272.783 4.426.167 9.222-1.952 13.204-4.448 8.351-14.284 10.797-22.677 13.375-.277.086-.158.521.119.433 7.39-2.384 15.932-4.364 21.02-10.703 3.246-4.047 4.573-9.281 4.165-14.4-.357-4.488-1.627-8.976-2.493-13.382-1.648-8.402-3.302-16.807-4.948-25.209-2.24-11.445-4.472-22.893-6.685-34.345-.051-.26-.452-.151-.402.11l-.003-.004zM49.846 7.872c7.59-.956 15.192-1.86 22.796-2.703 6.064-.672 12.939-1.682 18.839.438 2.71.974 5.296 2.64 7.075 4.914 2.092 2.674 3.288 5.957 4.157 9.196.869 3.239 1.55 6.75 2.199 10.125 1.184 6.16 2.216 12.348 3.403 18.509.05.26.453.151.402-.11-1.785-9.242-3.106-18.657-5.391-27.8-1.5-6.004-4.097-11.579-9.896-14.447-5.945-2.942-13.148-2.022-19.494-1.329-8.051.88-16.087 1.969-24.108 3.076-.072.009-.057.14.018.13zM47.303 7.96c-7.09.25-16.251 1.789-20.634 7.997-2.508 3.556-3.69 8.523-3.663 12.828.03 4.287.92 8.654 1.506 12.887a533.191 533.191 0 006.56 37.362c1.833 8.654 3.75 17.254 5.073 26.006 1.31 8.668 2.809 17.295 4.811 25.833.03.128.22.074.197-.053-1.562-7.683-3.11-15.339-4.196-23.104-1-7.153-2.246-14.249-3.716-21.322-2.466-11.872-4.906-23.723-6.849-35.695-.925-5.696-1.699-11.41-2.51-17.124-.584-4.115-.62-7.993.657-12.008.839-2.644 1.925-5.205 3.948-7.165 1.699-1.646 3.817-2.791 6.019-3.632 4.124-1.572 8.482-2.034 12.812-2.703.062-.009.047-.113-.015-.11v.003zM49.126 166.45c1.327 6.635 5.641 13.373 12.258 15.845 7.483 2.798 15.876-1.054 23.106-2.919.187-.048.107-.326-.08-.287-7.04 1.468-14.796 5.074-22.053 2.975-6.92-2.004-11.526-9.03-13.03-15.667-.029-.13-.228-.074-.202.056v-.003zM13.715 31.784c4.924 36.8 12.178 73.182 19.333 109.6 2.02 10.282 3.913 20.612 6.236 30.831.149.655 1.086.361.988-.272-1.398-9.219-3.273-18.379-5.079-27.527-1.809-9.169-3.648-18.332-5.46-27.501-3.608-18.234-7.185-36.471-10.49-54.761-1.83-10.125-3.678-20.244-5.279-30.408-.02-.136-.264-.107-.247.033l-.003.005z"
                    fill={lineColor}
                />
                <Path
                    d="M31.052 7.2c-3.841 1.208-7.593 2.65-10.72 5.266-3.344 2.798-5.302 6.742-6.096 10.973-.899 4.79-.518 9.725.02 14.532.539 4.809 1.351 10.153 2.69 15.026.113.411.687.227.625-.172-.726-4.764-1.488-9.477-1.895-14.288-.39-4.598-.836-9.385-.116-13.971.642-4.095 2.3-7.982 5.42-10.81 2.952-2.676 6.695-4.44 10.17-6.335.125-.068.038-.272-.099-.228V7.2zM38.204 163.92c.336 2.573.44 5.083 1.015 7.632.523 2.321 1.222 4.642 2.255 6.795 1.82 3.792 4.638 7.306 8.393 9.337 6.519 3.526 15.263 1.924 21.975-.189.512-.16.3-.945-.223-.803-3.425.921-6.96 1.034-10.488 1.111-3.529.076-7.066.011-10.14-1.587-3.6-1.874-6.221-5.184-7.947-8.781-1.053-2.197-1.85-4.465-2.532-6.798-.681-2.333-1.416-4.5-1.964-6.762-.044-.189-.374-.154-.348.048l.003-.003z"
                    fill={lineColor}
                />
                <Path
                    d="M56.38 188.27a968.833 968.833 0 00-.961-3.914c-.06-.239-.393-.213-.464 0l-1.068 3.162h.479c-.577-1.524-1.158-3.049-1.74-4.571-.087-.228-.414-.251-.492 0-.44 1.463-.883 2.925-1.324 4.388h.5c-.363-2.449-.75-4.891-1.145-7.334-.033-.21-.34-.177-.393 0-.503 1.632-1.044 3.248-1.577 4.871l.399.053c-.286-2.466-.568-4.932-.854-7.399-.03-.245-.378-.328-.458-.062-.461 1.552-1.488 2.706-2.996 3.319l.309.308 1.857-6.972c.083-.311-.402-.444-.485-.133l-1.857 6.972c-.045.165.125.385.31.308 1.666-.69 2.811-1.951 3.308-3.68l-.458-.063.91 7.399c.027.219.328.284.399.053.52-1.625 1.03-3.253 1.577-4.87h-.393c.333 2.457.675 4.912 1.041 7.363.04.266.432.222.5 0 .438-1.463.878-2.928 1.315-4.391h-.49c.583 1.522 1.166 3.047 1.752 4.569.086.225.399.242.479 0l1.053-3.165h-.464c.384 1.288.777 2.572 1.163 3.857.05.166.304.098.262-.071l.006.003zM20.992 14.604c-3.22 3.636-5.052 8.085-5.668 12.872-.05.406.542.494.726.195 1.104-1.782 2.21-3.561 3.314-5.343l-.696-.294c-1.481 4.293-2.963 8.586-4.448 12.878-.113.332.372.622.604.35a1088.68 1088.68 0 005.064-6.013l-.506-.388c-2.713 5.516-4.314 11.724-3.55 17.891.045.35.572.373.566 0-.116-6.093.723-12.085 3.54-17.568.158-.305-.252-.678-.505-.388-1.714 1.98-3.422 3.967-5.12 5.96l.603.35c1.494-4.29 2.99-8.578 4.487-12.867.146-.417-.476-.645-.696-.293l-3.33 5.335.727.195c.604-4.6 2.463-8.896 5.132-12.683.101-.145-.128-.322-.247-.19h.003zM20.87 56.22c1.633 9.55 3.234 19.107 4.927 28.646l2.514 14.157c.84 4.72 1.535 9.675 2.657 14.421.069.284.562.23.524-.071-.58-4.675-1.592-9.317-2.431-13.951-.872-4.81-1.747-9.622-2.618-14.433-1.744-9.616-3.583-19.217-5.389-28.824-.023-.121-.205-.068-.184.05v.003zM31.825 116.32c1.46 8.609 2.809 17.239 4.457 25.816.09.471.803.269.72-.198-1.503-8.586-3.303-17.118-4.993-25.671-.023-.122-.205-.068-.184.05v.003zM52.786 15.898c-.306-1.01-.738-1.708-1.794-2.078a2.815 2.815 0 00-2.702.467c-1.737 1.374-1.532 4 .357 5.125s4.451-.1 4.838-2.282c.176-.983-.158-2.156-1.104-2.641-.836-.43-1.86-.193-2.204.695-.188.483.407.755.776.596 1.643-.708 1.42 1.569.625 2.312-.907.852-2.36.636-3.032-.403-.56-.861-.223-2.037.61-2.593.952-.634 2.607-.136 3.044.956.14.35.696.219.58-.16l.006.006zM58.276 16.191c1.53.201 3.139-.142 4.665-.31l4.082-.45c2.919-.32 5.832-.667 8.748-1.004.91-.107.922-1.543 0-1.436-3.22.373-6.439.746-9.658 1.122-1.562.18-3.121.36-4.683.544-1.562.184-3.074.24-4.51.814-.355.143-.492.788 0 .862 2.939.435 6.256-.42 9.19-.764l9.658-1.137v-1.436c-3.014.356-6.028.705-9.04 1.078l-4.373.542c-1.39.172-2.883.222-4.198.722-.479.184-.375.79.116.856l.003-.003z"
                    fill={lineColor}
                />
                <Path
                    d="M51.132 16.424c.506-.604.592-1.471-.193-1.895-.851-.459-1.658.18-2.03.927-.434.873-.785 2.07-.136 2.922.648.853 1.72.634 2.392-.03.705-.695 1.368-1.806 1.106-2.827s-1.25-1.454-2.207-1.13c-1.643.556-3.309 3.712-.863 4.378 1 .272 1.943-.273 2.556-1.03s1.306-1.827.824-2.783c-.455-.9-1.532-.921-2.16-.199s-1.11 2.191-.845 3.115c.294 1.024 1.53.986 2.124.272.595-.713.789-1.936.033-2.593-1.729-1.504-3.782 2.478-1.979 3.162 1.06.402 2.065-1.043 2.2-1.94.148-1.012-.754-1.939-1.774-1.48-1.02.459-.95 1.82-.018 2.312 1.163.613 2.154-.586 2.124-1.66-.015-.501-.645-.794-1.011-.418-.444.456-.86 1.149-.435 1.767.348.507.973.507 1.408.128.476-.42-.131-1.036-.631-.814a.55.55 0 00.497-.246l-1.012-.418c.06.193.015.35-.134.471-.086.193-.134.22-.146.086-.03-.145-.032-.098-.011.142l-.096.249c-.089.216-.5.909-.401.31.056-.34.479-1.178.747-.636.157.32-.328 1.356-.417.628-.045-.355.176-.856.303-1.181.03-.077.393-1.072.717-.394.069.142-.136.512-.199.633-.33.64-.91 1.555-1.737 1.537-1.318-.03-.485-1.51.02-1.984.334-.314.932-.764 1.363-.34.318.314.202.823.036 1.187-.167.364-.447.835-.759 1.09-.815.663-1.133-.33-.997-.972.075-.352.197-.734.378-1.048.107-.186.268-.417.494-.48.55-.156 1.107.498.726 1.072-.056.083.074.187.14.107l.003.003z"
                    fill={lineColor}
                />
                <Path
                    d="M49.433 14.219c.961.098 2.041-.074 2.74.77.563.675.313 1.335.173 2.09-.066.343.315.577.586.337.794-.698.49-2.155-.143-2.85-.768-.847-2.422-1.209-3.427-.62-.134.08-.063.258.074.273h-.003zM1.558 33.738a24.974 24.974 0 01.773-10.134 23.362 23.362 0 011.887-4.64c.714-1.322 2.198-2.744 2.478-4.206.101-.53-.387-.867-.86-.657-1.428.624-2.347 2.735-3.023 4.05A25.668 25.668 0 00.856 23.2c-.943 3.5-1.03 7.13-.393 10.688.11.607 1.175.474 1.095-.148v-.003zM22.911 3.576C16.91 7.13 12.197 12.623 9.498 19.03c-2.93 6.96-3.94 15.987-1.038 23.13.318.785 1.46.504 1.29-.354-.746-3.79-1.451-7.464-1.264-11.351a32.383 32.383 0 012.363-10.717c2.556-6.235 6.992-11.546 12.484-15.445.431-.305.05-.998-.423-.72v.003zM164.25 53.864c2.372-3.763 4.44-7.717 6.651-11.576 1.795-3.136 3.709-7.699 7.847-8.114 2.308-.234 4.775.468 7.022.917a155.04 155.04 0 017.275 1.65c2.415.604 4.827 1.25 7.239 1.884 2.069.541 6.5.892 5.822 3.936-.288 1.302-1.177 2.471-1.859 3.617a963.599 963.599 0 00-2.105 3.556c-2.342 3.963-4.643 7.953-6.959 11.93-4.641 7.97-9.258 15.95-13.95 23.889-1.703 2.88-3.236 5.86-5.335 8.486-2.296 2.869-5.16 5.314-7.818 7.836-3.711 3.519-7.492 6.962-11.223 10.458-1.119 1.047-2.243 2.093-3.355 3.15-.599.569-1.167 1.3-1.981 1.54-1.464.43-2.493-.897-3.424-1.798l-2.843-2.745c-.833-.803-1.751-1.551-2.544-2.392-1.05-1.113-1.164-2.416-1-3.878.065-.576-.794-.825-.909-.221-.394 2.057-.155 3.71 1.298 5.286 1.811 1.965 3.821 3.773 5.75 5.622 1.381 1.324 3.111 2.174 4.916 1.037.657-.416 1.167-1.028 1.718-1.57 3.146-3.104 6.261-6.245 9.444-9.31 3.338-3.211 6.688-6.41 10.024-9.623 2.982-2.878 4.954-6.329 7.048-9.837 4.585-7.687 9.104-15.416 13.659-23.118 2.622-4.435 5.25-8.869 7.875-13.303.833-1.408 1.655-2.821 2.486-4.232.638-1.081 1.397-2.164 1.836-3.336.545-1.446.489-3.074-.835-4.078-.753-.572-1.721-.792-2.62-1.014a1114.5 1114.5 0 00-4.1-1.011c-5.162-1.26-10.339-2.487-15.574-3.403-1.974-.345-4.161-.845-6.135-.247-1.387.419-2.499 1.32-3.401 2.426-2.65 3.252-4.479 7.318-6.529 10.96-1.219 2.165-2.471 4.309-3.647 6.495-.083.156.145.28.239.132h-.003z"
                    fill={lineColor}
                />
                <Path
                    d="M162.82 56.458c-1.756 2.396-3.522 4.745-5.107 7.28s-3.035 5.067-4.483 7.635c-1.582 2.805-3.159 5.608-4.226 8.652-1.969 5.621-3.719 11.346-5.516 17.028-.635 2.007-1.593 4.165-1.743 6.28-.019.246.35.312.457.111.833-1.56 1.231-3.373 1.772-5.049.951-2.948 1.885-5.901 2.834-8.85.901-2.798 1.878-5.56 2.827-8.339s2.13-5.105 3.544-7.608c1.613-2.855 3.212-5.716 4.874-8.544 1.661-2.827 3.166-5.746 4.776-8.588.005-.01-.007-.015-.012-.006l.003-.002zM211.6 43.616c1.038.927 2.04 1.965 1.701 3.475-.181.805-.632 1.53-1.06 2.225-.112.18-.227.359-.34.541-.553.908-1.082 1.835-1.624 2.75-2.01 3.405-4.038 6.804-6.033 10.221-4.749 8.134-9.665 16.17-14.407 24.308-.816 1.402-1.653 2.79-2.441 4.207a7.11 7.11 0 00-.583 1.31l-.12.36c-.066.21-.121.262-.027.101-.181.312.309.581.492.272-.136.234.123-.135.283-.295.29-.293.525-.608.747-.957.748-1.18 1.427-2.406 2.134-3.611a899.568 899.568 0 006.677-11.638c4.559-8.076 9.273-16.064 13.91-24.094.565-.978 1.145-1.95 1.69-2.941.365-.666.737-1.337.974-2.06.642-1.963-.299-3.21-1.961-4.18-.007-.003-.015.006-.008.01l-.004-.003zM186.2 94.677c-.83.468-1.048 1.51-1.554 2.277-.816 1.24-1.697 2.466-2.744 3.52-1.497 1.505-2.981 2.97-4.589 4.358-1.762 1.522-3.497 3.077-5.246 4.61-2.384 2.09-4.748 4.202-7.204 6.207-1.519 1.24-3.032 3.046-4.575 4.008-.718.448-1.547.751-2.399.787-1.343.055-2.497-.65-3.685-1.179-1.574-.704-3.16-1.314-4.694-2.128-.433-.232-.803.432-.37.661 1.394.741 2.746 1.556 4.116 2.32 1.708.951 3.569 1.817 5.561 1.433 2.167-.42 3.623-2.029 5.187-3.44 4.19-3.782 8.367-7.58 12.575-11.349 1.89-1.692 3.743-3.34 5.443-5.227.932-1.032 1.741-2.179 2.453-3.372.425-.714.83-1.425 1.268-2.13.317-.512.503-.758.483-1.344 0-.01-.012-.016-.021-.01l-.005-.002z"
                    fill={lineColor}
                />
                <Path
                    d="M156.57 66.738c2.789 2.1 6.143 3.548 9.224 5.164 4.843 2.542 9.665 5.139 14.559 7.58a57.924 57.924 0 003.843 1.742c.18.073.331-.191.149-.265-1.02-.416-1.981-1.159-2.951-1.686-2.129-1.16-4.294-2.256-6.443-3.375-4.844-2.519-9.647-5.129-14.53-7.57a66.796 66.796 0 00-3.754-1.718c-.077-.032-.175.067-.095.129l-.002-.001z"
                    fill={lineColor}
                />
                <Path
                    d="M184.32 81.36c2.259 1.38 4.591 2.884 7.015 3.957.344.153.605-.302.284-.51-2.228-1.442-4.762-2.526-7.071-3.852-.264-.151-.483.251-.228.405zM160.02 73.81c1.809 1.618 4.293 2.69 6.397 3.867 2.333 1.303 4.641 2.644 6.961 3.973.975.557 2.126 1.095 2.363 2.269.292 1.436-1.253 2.945-2.693 2.45-1.02-.351-1.99-1.052-2.929-1.572-2.559-1.415-5.129-2.818-7.672-4.264-1.374-.78-2.739-1.572-4.113-2.35-.969-.551-1.917-1.244-2.961-1.635-.261-.097-.432.283-.251.455.836.794 1.977 1.319 2.958 1.917 1.406.854 2.832 1.668 4.251 2.497 2.821 1.647 5.638 3.31 8.522 4.849 1.093.583 2.323 1.486 3.602 1.004s2.499-2.104 2.221-3.482c-.322-1.603-2.142-2.28-3.424-2.97s-2.644-1.422-3.957-2.148c-1.731-.957-3.431-1.964-5.161-2.923-1.285-.712-2.658-1.584-4.082-1.984-.03-.007-.049.03-.028.05l-.004-.003z"
                    fill={lineColor}
                />
                <Path
                    d="M156.54 77.271c-.332-.518-.893-.7-1.317-1.133-.703-.72-.858-1.876-.308-2.73.626-.968 1.391-1.135 2.419-.709.61.254 1.1.628 1.766.693.139.013.177-.172.1-.256-.464-.504-1.145-.727-1.753-1.028-.355-.175-.68-.352-1.085-.333-.867.043-1.731.823-2.125 1.544-.826 1.506.166 4.335 2.191 4.16.1-.01.174-.117.114-.207l-.002-.001zM165.58 76.771c-.716.258-.978 1.202-1.352 1.827-.504.835-1.027 1.65-1.307 2.594-.018.064.069.108.112.061.643-.673 1.081-1.455 1.573-2.239.409-.652 1.215-1.322 1.144-2.12-.007-.08-.084-.152-.17-.123zM173.77 81.444c.136.565 1.262 1.026 1.701 1.287 1.32.794 2.695 1.795 1.543 3.474-.539.783-1.344 1.396-2.325 1.143-.414-.106-.756-.29-1.132-.488-.433-.232-1.13-.795-1.647-.695-.141.028-.224.204-.181.333.208.637 1.572 1.187 2.158 1.449 1.607.72 2.986.183 3.895-1.319.781-1.29.605-2.577-.639-3.478-.653-.474-2.481-2.036-3.349-1.747-.018.006-.024.02-.02.037l-.004.004zM201.66 53.904c-.009-.623.003-1.244.108-1.86.088-.52-.02-.691.33-.367.228.21.375.825.508 1.09.207.415.428.823.656 1.227.992 1.751 2.122 3.41 3.346 5.008.15.194.512.083.422-.185-.647-1.924-.985-3.895-1.254-5.9a43.605 43.605 0 00-.348-2.272c-.21-1.107-.85-2.508-.633-3.623l-.383.058c1.518 2.293 3.69 4.055 5.174 6.39.159.251.544.078.471-.207-1.005-3.984-2.242-7.954-2.538-12.071l-.437.126c1.437 3.036 2.719 6.229 4.444 9.12.163.273.531.07.478-.21-.423-2.237-.328-4.545-.775-6.784l-.381.169c.886 1.387 1.511 2.957 2.102 4.487.076.197.365.21.421-.01.246-.964-.157-2.517-.557-3.403-.097-.217-.477-.053-.387.17.334.813.721 2.27.519 3.13l.421-.01c-.63-1.55-1.285-3.149-2.16-4.58-.132-.216-.421-.056-.381.168.404 2.247.245 4.564.672 6.814l.478-.21c-1.739-2.917-3.042-6.028-4.493-9.09-.101-.214-.453-.096-.436.126.301 4.129 1.39 8.23 2.511 12.204l.472-.207c-1.553-2.3-3.742-4-5.26-6.338-.093-.146-.345-.126-.382.059-.164.822.075 1.48.289 2.276.328 1.225.541 2.477.733 3.73.312 2.033.53 4.056 1.177 6.022l.421-.186c-1.881-2.484-3.328-5.177-4.98-7.804-.046-.072-.151-.05-.172.026-.3.988-.429 1.905-.227 2.926.003.019.036.014.035-.005l-.004-.003zM205.32 39.768c.071.185.163.336.264.505.128.209.293.344.485.493.511.4 1.08-.366.53-.712-.208-.13-.395-.251-.639-.297-.196-.038-.371-.078-.575-.08-.045-.001-.084.05-.067.09l.002.001z"
                    fill={lineColor}
                />
                <Path
                    d="M205.59 39.937c.696 1.194 2.391 1.857 3.522 2.617 1.329.896 2.621 1.926 3.867 2.927.367.297.86-.19.517-.531-1.169-1.158-2.256-2.324-3.602-3.292-1.136-.817-2.699-2.018-4.134-2.028-.158-.002-.241.18-.167.308l-.003-.001zM179.66 35.449c.015.004.021-.02.006-.024-.014-.004-.02.02-.006.024zM190.58 41.583l1.986.537-.377.712-2.163 1.712 1.09.314-.456.863-1.998-.582.39-.725 2.156-1.703-1.078-.297.45-.831zM196.28 45.758c.328-.059.776-.332 1.084-.946.373-.742.228-1.322-.338-1.474l-1.282-.347-1.877 3.658.71.208.637-1.25.271.077-.131 1.399.833.243.091-1.569.002.001zm-.137-.872l-.491-.138.375-.736.491.135c.185.05.233.232.125.447-.117.231-.316.345-.501.294l.001-.002zM194.08 42.472c-.808-.218-1.785.408-2.344 1.466-.563 1.068-.404 2.035.395 2.269.806.236 1.833-.402 2.39-1.487.555-1.075.371-2.026-.442-2.245l.001-.003zm-1.503 2.877c-.406-.117-.458-.617-.143-1.217.315-.599.806-.937 1.211-.828.405.11.477.612.164 1.214-.313.605-.824.949-1.232.83zM188.42 41l1.838.496-.438.815-1.187-.326-.284.515 1.154.32-.436.806-1.156-.324-.31.569 1.189.34-.451.833-1.849-.538L188.42 41zM187.48 42.077c.386-.697.284-1.238-.227-1.376l-1.162-.312-1.934 3.44.642.185.655-1.174.243.07-.198 1.309.753.218.173-1.465c.304-.06.733-.316 1.05-.894l.005-.001zm-1.128.081l-.444-.124.388-.694.445.122c.167.046.2.214.09.417-.119.218-.309.326-.476.28l-.003-.001zM183.85 39.767l1.961.528-.454.807-.677-.186-1.492 2.63-.632-.183 1.495-2.62-.656-.18.455-.796zM182.32 38.807c.466-.8.356-1.587-.241-1.74s-1.468.37-1.937 1.159l-.277.464-.442-.118-2.018 3.382.915 1.494 2.175-.593 1.997-3.437-.455-.122.285-.486-.002-.003zm-1.627-.434c.22-.373.631-.61.931-.532.299.078.358.44.137.817l-.274.467-1.068-.287.274-.465zm-.498 3.735l-1.293.356-.553-.885 1.213-2.043 1.838.506-1.208 2.068.003-.002zM144.35 113.5c-.747 1.305-2.101 2.408-2.42 3.931-.283 1.34.367 2.455 1.181 3.469 1.084 1.349 1.626 1.167 3.047.277.79-.496 1.535-1.059 2.282-1.615.563-.421 1.038-.693 1.025-1.437a.271.271 0 00-.2-.248c-.987-.285-1.733.68-2.453 1.246-.411.324-.823.642-1.208.991-.334.301-.465.502-.941.596-.639.127-.669-.074-1.089-.661-1.729-2.421.76-4.054 1.311-6.346.077-.314-.37-.488-.531-.208l-.004.005zM194.57 168.55c1.409 2.78.111 6.653-1.036 9.305-1.312 3.025-3.351 5.692-5.614 8.072-.351.37.144 1.049.579.723 3.042-2.279 5.177-5.384 6.542-8.907 1.202-3.102 1.841-6.478-.289-9.303-.084-.11-.247-.014-.185.111l.003-.001zM161.01 132.52c-3.065-.842-5.065 2.249-5.336 4.902-.045.435.625.548.808.198.992-1.888 1.848-4.53 4.459-4.464.374.01.409-.542.066-.636h.003z"
                    fill={lineColor}
                />
            </G>
            <Path
                d="M156.05 158.76c-.877.326-1.451 1-2.946 2.587-2.013 2.121-6.279 6.057-7.682 8.64-.092.175.142.363.3.253 1.548-1.355 1.299-1.008 3.244-2.986 1.619-1.645 7.265-5.634 7.524-8.022.027-.24-.164-.5-.44-.472zM143.96 156.16c-1.376.581-.842.906-1.349 2.694-.689 2.399-2.346 7.525-2.277 9.983.007.165.303.196.385.049.668-1.88.443-.956 1.145-3.221.585-1.885 3.675-7.546 2.711-9.362-.095-.183-.39-.284-.615-.143zM133.76 202.94c1.934-1.294 2.971-8.536 3.593-10.625.844-2.801 1.116-3.616.852-4.182.004-.198-.29-.26-.381-.091-1.39 2.439-2.08 5.031-2.928 7.672-.707 2.197-2.584 4.752-1.741 7.002.084.226.371.373.605.224zM123.37 193.78c2.223.067 3.529-2.012 4.973-3.188 1.944-1.572 3.931-3.075 5.288-5.131.09-.14-.135-.336-.287-.261-2.254 1.033-3.975 2.534-5.853 3.99-1.563 1.21-4.286 2.076-4.542 4.119-.027.206.156.458.421.471zM106.13 106.05c-9.415 2.289-18.838 4.546-28.237 6.894l-13.95 3.486c-4.65 1.163-9.546 2.2-14.203 3.647-.279.088-.192.577.107.517 4.623-.901 9.185-2.231 13.75-3.388 4.738-1.202 9.477-2.407 14.216-3.609 9.473-2.404 18.924-4.901 28.383-7.367.12-.032.054-.209-.063-.18h-.003z"
                fill={lineColor}
            />
            <Path
                d="M47.954 67.905c1.633 9.55 3.234 19.107 4.927 28.646.84 4.72 1.675 9.438 2.514 14.158s1.535 9.675 2.657 14.421c.069.284.562.231.524-.071-.58-4.675-1.592-9.317-2.431-13.951l-2.618-14.432c-1.744-9.616-3.582-19.217-5.388-28.824-.024-.121-.206-.068-.185.05v.003z"
                fill={lineColor}
            />
            <Path
                d="M82.722 77.325c-.553 3.458-.578 8.413.023 15.245.244 2.77.244 4.965.034 6.67-.209 1.692-.633 2.973-1.304 3.846-.7.912-1.629 1.326-2.666 1.328-.992.003-2.041-.368-3.071-.914-2.064-1.092-4.342-3.047-6.441-5.006-.914-.853-1.787-1.7-2.605-2.494-1.103-1.07-2.105-2.043-2.967-2.797-.465-.407-.93-.552-1.41-.529-.507.025-1.099.242-1.775.69-1.362.899-2.858 2.591-4.363 4.749-2.994 4.293-5.832 10.15-7.529 14.242-.16.385-1.007 2.733-1.39 2.574s1.89-5.942 2.05-6.327c1.717-4.141 2.552-6.933 5.633-11.351 1.533-2.198 3.162-4.083 4.769-5.145.808-.534 1.661-.894 2.53-.936.894-.045 1.736.25 2.476.899.88.769 1.94 1.796 3.076 2.899.817.792 1.674 1.623 2.533 2.425 2.1 1.96 4.25 3.787 6.117 4.776.936.495 1.728.74 2.363.739.588-.002 1.07-.212 1.476-.74.435-.567.81-1.541 1.003-3.113.193-1.561.199-3.642-.04-6.353-.604-6.875-.591-11.974-.01-15.615.578-3.613 1.746-5.974 3.635-7.092 1.898-1.123 4.252-.83 6.785.164 2.553 1.003 5.484 2.796 8.69 4.984.344.234 2.22 1.6 1.986 1.944-.234.343-3.121-1.389-3.465-1.623-3.195-2.18-5.377-2.966-7.762-3.903-2.405-.944-4.184-1.029-5.467-.27-1.294.766-2.357 2.548-2.914 6.033z"
                clipRule="evenodd"
                fill={lineColor}
                fillRule="evenodd"
            />
            <Path
                d="M160.03 188.14c.603.002 13.103-1.259 13.103-1.259l.471-10.446-16.315-.887.052 12.743 2.689-.151z"
                fill={fillColor}
            />
            <Path
                d="M151.16 186.45c.743.017 6.406-.284 6.406-.284l-.279-3.701-.593-4.988-9.06.661v7.74l3.526.572z"
                fill={fillColor}
            />
            <Path
                d="M156.78 175.1c-1.432 1.833-.55 4.627-.488 6.805.074 2.925.12 4.124.723 6.502.058.189.913.189.947 0 0-3.884.02-3.315 0-6.089-.016-2.308-.516-6.918.479-7.437-.15-.189-1.486.004-1.661.219z"
                fill={lineColor}
            />
            <Path
                d="M157.29 177.28c-.466-.808-3.529-.561-5.008-.483-1.992.093-3.492.189-4.912.654-.099.063-.249.388-.077.723.766.328 1.527-.21 3.443-.246 1.596-.029 5.887-.038 6.583-.239.046-.161.162-.078-.029-.409zM157.01 185.27c-1.981-.043-3.314 0-4.713 0-1.915.048-4.299-.039-4.956.048-.087.063-.108.879.032.902 2.065.391 3.763.167 5.527.167 1.549 0 3.658.088 4.261-.063.034-.149.306-1.045-.151-1.054z"
                fill={lineColor}
            />
            <Path
                d="M147.21 177.8c-.08.655-.303 3.207-.29 4.611.008 1.889-.139 2.109.302 3.766.051.104.881.116.881-.187a24.596 24.596 0 01-.222-4.14c.035-1.505.424-3.702-.05-4.259-.141-.072-.447.007-.621.209zM173.31 186.92c.516-.068.878-2.092.971-3.493.136-1.884-.082-5.583-.702-7.191-.044-.107-.555.32-.602.452.512 3.883.153 5.413-.024 7.213-.149 1.498-.708 2.589-.278 3.181.135.082.446.026.635-.162z"
                fill={lineColor}
            />
            <Path
                d="M157.57 175.72c3.838.274 5.482.425 7.773.45 2.696.03 5.006.311 7.675.561.789.075.717-.938-.077-1.095-2.698-.533-4.905-.643-7.688-.757-2.348-.097-7.456-.231-8.337.132-.226.139.434.601.654.709zM173.53 186.67c-.191.92-6.071 1.241-8.359 1.361-2.691.142-5.305.216-7.962.577-.208.028-.573-1.034.213-1.224 2.375-.574 4.285-.282 7.061-.512 2.342-.194 6.138-.746 8.091-.888.232.13.915.587.7.705l.256-.019zM161.38 177.57c.804-.138 1.665-.092 2.478-.102l2.173-.028c1.553-.021 3.113.09 4.666.075.485-.004.51.197.019.202-1.714.016-3.414.205-5.128.22l-2.494.022c-.832.007-1.633.055-2.41-.079-.192-.033-.283-.25-.026-.298 1.543-.283 3.323-.136 4.885-.149 1.715-.014 3.44.096 5.154.082l.011.115c-1.605.013-3.189.286-4.793.292l-2.33.01c-.74.003-1.477-.032-2.188-.146-.259-.042-.276-.172-.018-.217l.001.001z"
                fill={lineColor}
            />
            <Defs>
                <ClipPath id="a">
                    <Path transform="translate(.052)" fill="#fff" d="M0 0H213.9V202.99H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    );
};
