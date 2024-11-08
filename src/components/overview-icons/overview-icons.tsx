import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './overview-icons.css?inline';

interface ItemProps {
    highestAltitude?: string;
    distance?: string;
    duration?: string;
    lodging?: string;
    meal?: string;
}

export default component$<ItemProps>((props) => {
    useStylesScoped$(styles);

    return (
        <>
            <div class="itinerary-icons d-flex align-item-center justify-content-between">
                <span class="flex-grow-1"><svg width="50" height="50" viewBox="0 0 56.169018 50.856632" version="1.1" id="svg1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs id="defs1" /><path id="rect5" style="opacity:1;fill:#253a6f;fill-opacity:1;stroke:#008080;stroke-width:1.12675;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none" d="m 8.9607884,11.696177 c -8.6e-5,-3.4929171 0.382025,-4.6864513 4.6223856,-4.622385 h 29.111144 c 4.62247,0.00386 4.62247,1.1592202 4.62238,4.622385 v 4.733631 H 8.9607884 Z" /><path id="path7" style="opacity:1;fill:#f9f9f9;stroke:#008080;stroke-width:1.12675;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none" d="m 8.9607024,16.429808 v 24.488286 c 8.6e-5,5.177832 0.786289,6.504436 4.6220086,6.439878 h 29.110537 c 2.81227,0.04263 5.05728,-0.89169 4.62353,-6.439878 V 16.429808 Z" /><path style="opacity:1;fill:#008080;fill-opacity:0.986842;stroke:#008080;stroke-width:0.509484;stroke-linecap:round;stroke-linejoin:round" d="m 13.712078,20.076222 a 0.3176358,0.43208426 0 0 0 -0.318287,0.432976 v 3.979668 a 0.3176358,0.43208426 0 0 0 0.318287,0.432975 h 4.571184 a 0.3176358,0.43208426 0 0 0 0.317149,-0.432975 v -3.979668 a 0.3176358,0.43208426 0 0 0 -0.317149,-0.432976 z" id="rect7" /><path id="path5" style="fill:none;stroke:#008080;stroke-width:1.12675;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none" d="m 8.9877054,34.970396 v 4.268396 c 8.7e-5,4.894081 0.78629,6.147998 4.6220096,6.086979 h 25.226233 l 8.38944,-8.680895 0.11839,-1.67448" /><path style="opacity:1;fill:#008080;fill-opacity:0.986842;stroke:#008080;stroke-width:0.509484;stroke-linecap:round;stroke-linejoin:round" d="m 21.709596,20.076222 a 0.3176358,0.43208426 0 0 0 -0.318286,0.432976 v 3.979668 a 0.3176358,0.43208426 0 0 0 0.318286,0.432975 h 4.571185 a 0.3176358,0.43208426 0 0 0 0.317149,-0.432975 v -3.979668 a 0.3176358,0.43208426 0 0 0 -0.317149,-0.432976 z" id="path44" /><path style="opacity:1;fill:#008080;fill-opacity:0.986842;stroke:#008080;stroke-width:0.509484;stroke-linecap:round;stroke-linejoin:round" d="m 29.707117,20.076222 a 0.3176358,0.43208426 0 0 0 -0.318287,0.432976 v 3.979668 a 0.3176358,0.43208426 0 0 0 0.318287,0.432975 h 4.571191 a 0.3176358,0.43208426 0 0 0 0.31715,-0.432975 v -3.979668 a 0.3176358,0.43208426 0 0 0 -0.31715,-0.432976 z" id="path45" /><path style="opacity:1;fill:#008080;fill-opacity:0.989474;stroke:#008080;stroke-width:0.509484;stroke-linecap:round;stroke-linejoin:round" d="m 37.704638,20.076222 a 0.3176358,0.43208426 0 0 0 -0.31829,0.432976 v 3.979668 a 0.3176358,0.43208426 0 0 0 0.31829,0.432975 h 4.57119 a 0.3176358,0.43208426 0 0 0 0.31714,-0.432975 v -3.979668 a 0.3176358,0.43208426 0 0 0 -0.31714,-0.432976 z" id="path46" /><path style="opacity:1;fill:#008080;fill-opacity:0.989474;stroke:#008080;stroke-width:0.509484;stroke-linecap:round;stroke-linejoin:round" d="m 13.712078,28.530518 a 0.3176358,0.43208426 0 0 0 -0.318287,0.432975 v 3.979669 a 0.3176358,0.43208426 0 0 0 0.318287,0.432975 h 4.571184 a 0.3176358,0.43208426 0 0 0 0.317149,-0.432975 v -3.979669 a 0.3176358,0.43208426 0 0 0 -0.317149,-0.432975 z" id="path50" /><path style="opacity:1;fill:#008080;fill-opacity:1;stroke:#008080;stroke-width:0.509484;stroke-linecap:round;stroke-linejoin:round" d="m 21.709596,28.530518 a 0.3176358,0.43208426 0 0 0 -0.318286,0.432975 v 3.979669 a 0.3176358,0.43208426 0 0 0 0.318286,0.432975 h 4.571185 a 0.3176358,0.43208426 0 0 0 0.317149,-0.432975 v -3.979669 a 0.3176358,0.43208426 0 0 0 -0.317149,-0.432975 z" id="path51" /><path style="opacity:1;fill:#008080;fill-opacity:0.997368;stroke:#008080;stroke-width:0.509484;stroke-linecap:round;stroke-linejoin:round" d="m 29.707117,28.530518 a 0.3176358,0.43208426 0 0 0 -0.318287,0.432975 v 3.979669 a 0.3176358,0.43208426 0 0 0 0.318287,0.432975 h 4.571191 a 0.3176358,0.43208426 0 0 0 0.31715,-0.432975 v -3.979669 a 0.3176358,0.43208426 0 0 0 -0.31715,-0.432975 z" id="path52" /><path style="opacity:1;fill:#008080;fill-opacity:0.992105;stroke:#008080;stroke-width:0.509484;stroke-linecap:round;stroke-linejoin:round" d="m 37.704638,28.530518 a 0.3176358,0.43208426 0 0 0 -0.31829,0.432975 v 3.979669 a 0.3176358,0.43208426 0 0 0 0.31829,0.432975 h 4.57119 a 0.3176358,0.43208426 0 0 0 0.31714,-0.432975 v -3.979669 a 0.3176358,0.43208426 0 0 0 -0.31714,-0.432975 z" id="path53" /><path style="opacity:1;fill:#008080;fill-opacity:0.997368;stroke:#008080;stroke-width:0.509484;stroke-linecap:round;stroke-linejoin:round" d="m 13.712078,36.899617 a 0.3176358,0.43208426 0 0 0 -0.318287,0.432975 v 3.979669 a 0.3176358,0.43208426 0 0 0 0.318287,0.432975 h 4.571184 a 0.3176358,0.43208426 0 0 0 0.317149,-0.432975 v -3.979669 a 0.3176358,0.43208426 0 0 0 -0.317149,-0.432975 z" id="path54" /><path style="opacity:1;fill:#008080;fill-opacity:0.997368;stroke:#008080;stroke-width:0.509484;stroke-linecap:round;stroke-linejoin:round" d="m 21.709596,36.899617 a 0.3176358,0.43208426 0 0 0 -0.318286,0.432975 v 3.979669 a 0.3176358,0.43208426 0 0 0 0.318286,0.432975 h 4.571185 a 0.3176358,0.43208426 0 0 0 0.317149,-0.432975 v -3.979669 a 0.3176358,0.43208426 0 0 0 -0.317149,-0.432975 z" id="path55" /><path style="opacity:1;fill:#008080;fill-opacity:0.997368;stroke:#008080;stroke-width:0.509484;stroke-linecap:round;stroke-linejoin:round" d="m 29.707117,36.899617 a 0.3176358,0.43208426 0 0 0 -0.318287,0.432975 v 3.979669 a 0.3176358,0.43208426 0 0 0 0.318287,0.432975 h 4.571191 a 0.3176358,0.43208426 0 0 0 0.31715,-0.432975 v -3.979669 a 0.3176358,0.43208426 0 0 0 -0.31715,-0.432975 z" id="path56" /><path style="opacity:1;fill:none;fill-opacity:0.997368;stroke:#008080;stroke-width:1.12675;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none" d="m 18.75845,6.6425334 c 0,0 0.03327,-0.8739454 0,-1.9759274 -0.03327,-1.101982 -2.980522,-1.0054341 -3.073666,0 -0.09316,1.0054341 0,4.9298417 0,4.9298417 0.440536,0.7506443 0.997063,1.2306543 1.756388,1.2374533" id="path58" /><path style="opacity:1;fill:none;fill-opacity:0.997368;stroke:#008080;stroke-width:1.12675;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none" d="m 40.236698,6.6425334 c 0,0 0.0333,-0.8739454 0,-1.9759274 -0.0333,-1.101982 -2.98052,-1.0054341 -3.07367,0 -0.0932,1.0054341 0,4.9298417 0,4.9298417 0.44054,0.7506443 0.99707,1.2306543 1.75639,1.2374533" id="path59" /><path style="opacity:1;fill:none;fill-opacity:0.997368;stroke:#008080;stroke-width:1.12675;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none" d="m 29.114036,6.6425334 c 0,0 0.03327,-0.8739454 0,-1.9759274 -0.03327,-1.101982 -2.980522,-1.0054341 -3.073665,0 -0.09316,1.0054341 0,4.9298417 0,4.9298417 0.440536,0.7506443 0.997063,1.2306543 1.756386,1.2374533" id="path60" /><path style="opacity:1;fill:none;fill-opacity:1;stroke:#008080;stroke-width:1.12675;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none" d="m 38.835958,45.325771 -0.0121,-5.730067 c 0,0 -0.072,-1.124463 0.85735,-1.984463 0.92937,-0.85999 1.69018,-0.966365 1.69018,-0.966365 h 5.85397" id="path61" /></svg></span>
                <span class="flex-grow-1"><svg width="50" height="50" viewBox="0 0 64.114302 38.423534" version="1.1" id="svg1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs id="defs1" /><g id="layer1" transform="translate(-244.80551,-23.682351)"><g id="g132"><g id="g124" transform="translate(214.40426,-11.696845)"><g id="g121" style="display:inline"><path id="path120" style="fill:#1d3971;fill-opacity:1;stroke-width:0.342223" d="m 52.318228,49.212776 -3.470076,4.423497 a 0.78796886,0.78796886 175.74805 0 1 -1.161206,0.08633 l -3.062042,-2.893926 a 0.6748548,0.6748548 171.69076 0 0 -1.047992,0.153058 L 40.932385,55.5625 30.401245,73.80273 H 52.902197 75.403149 L 64.872009,55.5625 62.286166,51.083388 a 0.76757667,0.76757667 8.3092435 0 0 -1.191981,-0.174087 l -2.964717,2.801945 a 0.80305141,0.80305141 4.2519501 0 1 -1.183433,-0.08799 l -3.459869,-4.410485 a 0.74221132,0.74221132 180 0 0 -1.167938,0 z" /><path id="path121" style="fill:#1e95cb;fill-opacity:1;stroke-width:0.342223" d="m 52.426081,35.654087 -6.84075,11.848957 2.226254,2.104024 a 0.63156469,0.63156469 175.74804 0 0 0.930717,-0.0692 l 3.759327,-4.79222 a 0.50911319,0.50911319 0 0 1 0.801136,0 l 3.786181,4.826453 a 0.59188441,0.59188441 4.251957 0 0 0.872242,0.06485 l 2.257875,-2.13391 -6.84075,-11.848957 a 0.54976677,0.54976677 0 0 0 -0.952232,0 z" /></g><g id="g123" transform="matrix(0.74266227,0,0,0.74266227,38.516459,18.992227)" style="display:inline"><path id="path122" style="fill:#1d3971;fill-opacity:1;stroke-width:0.342223" d="m 52.318228,49.212776 -3.470076,4.423497 a 0.78796886,0.78796886 175.74805 0 1 -1.161206,0.08633 l -3.062042,-2.893926 a 0.6748548,0.6748548 171.69076 0 0 -1.047992,0.153058 L 40.932385,55.5625 30.401245,73.80273 H 52.902197 75.403149 L 64.872009,55.5625 62.286166,51.083388 a 0.76757667,0.76757667 8.3092435 0 0 -1.191981,-0.174087 l -2.964717,2.801945 a 0.80305141,0.80305141 4.2519501 0 1 -1.183433,-0.08799 l -3.459869,-4.410485 a 0.74221132,0.74221132 180 0 0 -1.167938,0 z" /><path id="path123" style="fill:#1e95cb;fill-opacity:1;stroke-width:0.342223" d="m 52.426081,35.654087 -6.84075,11.848957 2.226254,2.104024 a 0.63156469,0.63156469 175.74804 0 0 0.930717,-0.0692 l 3.759327,-4.79222 a 0.50911319,0.50911319 0 0 1 0.801136,0 l 3.786181,4.826453 a 0.59188441,0.59188441 4.251957 0 0 0.872242,0.06485 l 2.257875,-2.13391 -6.84075,-11.848957 a 0.54976677,0.54976677 0 0 0 -0.952232,0 z" /></g></g><path id="path124" style="fill:#ffffff;fill-opacity:1;stroke-width:0.76" d="m 283.75787,47.8007 -1.10846,1.919779 7.15047,12.385291 h 2.14147 z" /></g></g></svg></span>
                <span class="flex-grow-1"><svg width="50" height="50" viewBox="0 0 56.169018 50.856632" version="1.1" id="svg1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs id="defs1" /><path id="path145" style="fill:#008080;fill-opacity:1;stroke-width:0.359895" d="m 46.630401,2.9452288 c -3.071348,0.00193 -5.681992,2.2442725 -6.147405,5.2801532 l -0.0176,2.387e-4 c 0,0 -0.01645,0.3270211 -0.02546,0.4833079 -0.0166,0.1527319 -0.02754,0.3060262 -0.0328,0.4595678 0.0016,0.023588 0.0034,0.047166 0.0053,0.070734 -0.08409,1.9072656 0.906472,6.1879046 1.504298,8.4788556 1.070329,4.101663 3.346217,11.2657 4.692542,11.217504 1.474972,-0.05279 3.827509,-7.429276 4.90706,-11.472565 0.684821,-2.564878 1.407596,-6.928761 1.330151,-8.5911075 -2.87e-4,-0.00563 -5.82e-4,-0.011259 -8.84e-4,-0.016888 -0.01627,-0.346473 -0.03599,-0.7497984 -0.03599,-0.7497984 l -0.04943,4.687e-4 C 52.24342,5.1240215 49.656697,2.9462839 46.630569,2.9452377 Z m -0.02131,2.9289544 c 2.029973,-2.82e-5 3.675598,1.6455968 3.67557,3.6755696 -1.03e-4,2.0298802 -1.64569,3.6753612 -3.67557,3.6753332 -2.02988,2.8e-5 -3.675466,-1.645453 -3.675569,-3.6753332 -2.8e-5,-2.0299724 1.645597,-3.6755973 3.675569,-3.6755696 z" /><g id="g147" transform="matrix(0.52644617,0,0,0.46698998,-61.409494,1.3128556)"><path style="color:#000000;fill:#000000;fill-opacity:0;stroke-linecap:square;stroke-linejoin:round;-inkscape-stroke:none" d="m 189.25986,54.182774 -21.10693,-0.193641 a 6.4924049,6.4924049 135.53134 0 0 -6.55168,6.431277 l -0.0504,5.378323 c -0.0404,4.31603 3.42469,7.694977 7.7407,7.698262 7.48504,0.0057 14.96723,0.282387 22.2804,0.262822 4.10149,-0.01097 7.36461,3.178911 7.29012,7.280668 l -0.11628,6.40316 a 6.6100591,6.6100591 135.52018 0 1 -6.60897,6.490041 h -44.90657" id="path146" /><path id="path147" style="color:#000000;fill:#253a6f;stroke-linecap:square;stroke-linejoin:round;-inkscape-stroke:none" d="m 168.17156,50.798145 c -4.68187,-0.04295 -8.89137,2.271655 -8.59929,9.604704 l -0.0512,5.376393 c -0.0507,5.412332 1.20205,9.650156 9.76838,9.748932 7.43563,0.08574 14.92086,0.280949 22.28891,0.261237 3.04607,-0.0081 4.38418,2.965887 4.32958,5.025586 l 0.0526,6.307088 c -0.21369,1.856578 -1.26572,3.309828 -3.78506,3.362854 C 175.771,90.605018 159.55744,89.80601 143.43132,89.91383 l -2.90278,6.048571 h 4.67285 1.52666 0.50253 44.90676 c 4.68788,0 8.55323,-2.028715 8.63835,-8.481883 l 0.11717,-6.401773 c 0.0944,-7.117472 -4.13159,-10.608556 -9.28847,-10.594759 -7.25825,0.01942 -14.81556,-0.344436 -22.34957,-0.35017 -3.25732,-0.0025 -4.61364,-1.285084 -4.58346,-4.504786 l 0.13519,-5.189959 c 0.0233,-2.488084 0.58853,-3.684853 3.3286,-4.419503 2.7195,0.159675 14.84593,0.140969 22.26895,0.20351 0.0134,0.0042 0.027,0.0075 0.0408,0.0098 l 8.42919,0.02544 c -0.48852,-1.585672 -0.77368,-2.61414 -1.66219,-5.200856 z" /></g><path id="path2" style="fill:#008080;fill-opacity:1;stroke-width:0.359895" d="m 9.7949923,21.902364 c -3.071348,0.0019 -5.681992,2.244272 -6.147405,5.280153 l -0.0176,2.39e-4 c 0,0 -0.01645,0.327021 -0.02546,0.483308 -0.0166,0.152732 -0.02754,0.306026 -0.0328,0.459567 0.0016,0.02359 0.0034,0.04717 0.0053,0.07073 -0.08409,1.907266 0.906472,6.187905 1.504298,8.478856 1.070329,4.101663 3.346217,11.2657 4.692542,11.217504 1.4749717,-0.05279 3.8275087,-7.429276 4.9070597,-11.472565 0.684821,-2.564878 1.407596,-6.928761 1.330151,-8.591107 -2.87e-4,-0.0056 -5.82e-4,-0.01126 -8.84e-4,-0.01689 -0.01627,-0.346473 -0.03599,-0.749799 -0.03599,-0.749799 l -0.04943,4.69e-4 c -0.516763,-2.981672 -3.103486,-5.15941 -6.1296137,-5.160456 z m -0.02131,2.928954 c 2.0299727,-2.8e-5 3.6755977,1.645597 3.6755697,3.67557 -1.03e-4,2.02988 -1.64569,3.675361 -3.6755697,3.675333 -2.02988,2.8e-5 -3.675466,-1.645453 -3.675569,-3.675333 -2.8e-5,-2.029973 1.645597,-3.675597 3.675569,-3.67557 z" /></svg></span>
                <span class="flex-grow-1"><svg width="50" height="50" viewBox="0 0 64.11429 38.243611" version="1.1" id="svg1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs id="defs1" /><g id="layer1" transform="translate(-247.10012,-107.04461)"><rect style="fill:#243970;fill-opacity:1;stroke:none;stroke-width:0.375871;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1" id="rect141" width="6.7488718" height="38.243607" x="247.10011" y="107.04462" /><rect style="fill:#243970;fill-opacity:1;stroke:none;stroke-width:0.43242;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1" id="rect142" width="6.7488718" height="50.616539" x="130.72684" y="-304.46555" transform="rotate(90)" /><rect style="fill:#243970;fill-opacity:1;stroke:none;stroke-width:0.232419;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1" id="rect143" width="6.7488718" height="14.622559" x="304.46555" y="130.66565" /><circle style="fill:#008080;fill-opacity:1;stroke:none;stroke-width:0.347396;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1" id="circle143" cx="263.1933" cy="120.59859" r="6.9972205" /><path id="path143" style="fill:#008080;fill-opacity:1;stroke-width:0.452664;stroke-linecap:round;stroke-linejoin:round" d="m 160.31863,154.21603 h 30.18092 a 17.12671,17.12671 45 0 1 17.12671,17.12671 h -47.30763 z" transform="matrix(0.81711211,0,0,0.81711211,141.3678,-12.41041)" /></g></svg></span>
                <span class="flex-grow-1"><svg width="50" height="50" viewBox="0 0 56.169018 50.856632" version="1.1" id="svg1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs id="defs1" /><path id="path73" style="opacity:1;fill:#1d3c6d;fill-opacity:1;stroke:#253a6f;stroke-width:0.46017;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1" d="M 48.628578,18.455172 V 12.69351 c -0.53057,-2.011736 -1.63503,-2.8757058 -2.88083,-3.4569987 L 26.923316,9.3517445 V 41.040889 h 17.787322 c 1.77426,-0.212091 3.0945,-1.55924 4.1484,-3.572231 v -5.876895 h -2.99606 V 18.455172 Z m -43.4105216,0 V 12.69351 c 0.53058,-2.011736 1.63504,-2.8757058 2.88083,-3.4569987 L 26.923316,9.3517445 V 41.040889 H 9.1359964 c -1.77427,-0.212091 -3.0945,-1.55924 -4.14839,-3.572231 v -5.876895 h 2.99604 V 18.455172 Z" /><path style="opacity:1;fill:#1e9ed2;fill-opacity:1;stroke:#1e9ed2;stroke-width:0.401207;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1" d="m 255.38054,-40.271876 h 2.47492 v 8.922446 h -2.36913 a 0.7799722,0.7799722 45 0 1 -0.77997,-0.779972 v -7.468292 a 0.67418169,0.67418169 135 0 1 0.67418,-0.674182 z" id="path74" transform="matrix(1.146964,0,0,1.146964,-289.20924,66.212231)" /><path style="opacity:1;fill:#1e9ed2;fill-opacity:1;stroke:#1e9ed2;stroke-width:0.401207;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1" d="m 255.38054,-40.271876 h 2.47492 v 8.922446 h -2.36913 a 0.7799722,0.7799722 45 0 1 -0.77997,-0.779972 v -7.468292 a 0.67418169,0.67418169 135 0 1 0.67418,-0.674182 z" id="path75" transform="matrix(-1.146964,0,0,1.146964,343.0341,66.212231)" /><path id="path77" style="opacity:1;fill:#f9f9f9;stroke-width:0.4777;stroke-linecap:round;stroke-linejoin:round" d="m 23.581296,14.332667 c -6.03993,-1.08e-4 -10.93633,4.896286 -10.93623,10.936236 -10e-5,6.039945 4.8963,10.936342 10.93623,10.936233 1.83878,-2.67e-4 3.5698,-0.458139 5.09064,-1.260075 v -3.055818 c -1.40995,1.08612 -3.17321,1.734504 -5.09064,1.734626 -4.61488,6.93e-4 -8.35646,-3.740081 -8.35675,-8.354966 2.9e-4,-4.61489 3.74187,-8.355662 8.35675,-8.354968 2.49378,1.6e-4 4.72999,1.094905 6.26084,2.827531 h 3.17086 c -1.89926,-3.234229 -5.40997,-5.408214 -9.4317,-5.408799 z" /><path id="path78" style="opacity:1;fill:#f9f9f9;stroke-width:0.298174;stroke-linecap:round;stroke-linejoin:round" d="m 23.298536,18.442872 c -3.77004,-6.8e-5 -6.82712,3.055212 -6.82706,6.825261 0,0.04869 0.002,0.09716 0.003,0.145601 h 1.61061 c -0.001,-0.04829 -0.003,-0.09699 -0.003,-0.145601 2e-4,-2.880544 2.33592,-5.215097 5.21647,-5.214664 0.88739,5.6e-5 1.72256,0.223352 2.45364,0.614759 V 18.89765 c -0.76108,-0.293758 -1.58873,-0.454652 -2.45365,-0.454778 z" /><path style="opacity:1;fill:#f9f9f9;fill-opacity:1;stroke:none;stroke-width:0.46017;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1" d="m 39.346218,20.956163 v 15.969713 h -3.17243 l 0.13391,-1.712527 c -0.0425,-0.911286 0.16271,-3.330494 0.9581,-5.481529 h -1.84478 c -0.18213,-4.68191 1.27185,-7.435563 3.9252,-8.775657 z" id="path79" /><path id="rect80" style="opacity:1;fill:#f9f9f9;stroke-width:0.522539;stroke-linecap:round;stroke-linejoin:round" d="m 30.069006,21.136957 v 5.613719 h 1.23132 l -0.61297,9.746263 c 1.31451,0.815912 2.45568,0.590604 3.535772,0 l -0.657902,-9.746263 h 1.276252 v -5.613719 c -0.37634,-0.426573 -0.69052,-0.293646 -0.98685,0 v 3.974363 c -0.283542,0.236724 -0.591482,0.316223 -0.963492,0 v -3.974363 c -0.4182,-0.464065 -0.69711,-0.278141 -0.95629,0 v 3.974363 c -0.28353,0.236723 -0.59147,0.316222 -0.96348,0 v -3.974363 c -0.40436,-0.483334 -0.65583,-0.253192 -0.90236,0 z" /><rect style="fill:#000000;fill-opacity:0;stroke-width:0.60655;stroke-linecap:round;stroke-linejoin:round" id="rect2" width="5.124712" height="4.6539936" x="25.21312" y="9.0064259" /></svg></span>
            </div>

            {/* Mobile Screen */}
            <div class="itinerary-icons-description d-flex d-lg-none align-item-center justify-content-center">
                <span class="flex-grow-1 text-left">{props.duration}</span>
                <span class="flex-grow-1">{props.highestAltitude}</span>
                <span class="flex-grow-1">{props.distance}</span>
                <span class="flex-grow-1 text-left">{props.lodging}</span>
                <span class="flex-grow-1 text-right">{props.meal}mm</span>
            </div>

            {/* Desktop Screen */}
            <div class="itinerary-icons-description d-none d-lg-flex align-item-center justify-content-between">
                <span class="flex-grow-1 text-left">{props.duration}</span>
                <span class="flex-grow-1">{props.highestAltitude}</span>
                <span class="flex-grow-1 text-right">{props.distance}</span>
                <span class="flex-grow-1 text-right">{props.lodging}</span>
                <span class="flex-grow-1 text-right align-self-start">{props.meal}dd</span>
            </div>
        </>
    );
});