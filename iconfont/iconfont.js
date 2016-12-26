;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-car" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M884.98176 381.66528l-54.64064 0c-18.24768-135.63904-135.24992-240.20992-277.03296-240.20992l-55.93088 0c-146.26816 0-266.30144 111.22688-278.60992 253.11232-89.10848 46.3872-150.016 138.9568-150.016 245.76l0.18432 0.88064c-21.44256 4.28032-37.4784 22.9376-37.4784 45.28128 0 25.51808 20.8896 46.20288 46.592 46.20288l65.61792 0c4.64896 72.21248 65.41312 129.37216 139.40736 129.37216 73.99424 0 134.73792-57.15968 139.42784-129.37216l131.1744 0c4.66944 72.21248 65.47456 129.37216 139.44832 129.37216 77.16864 0 139.81696-62.1568 139.81696-138.6496 0-4.95616-0.43008-10.11712-0.96256-14.97088 56.32-31.9488 94.14656-91.7504 94.14656-160.52224l0-125.62432C925.96224 399.7696 907.69408 381.66528 884.98176 381.66528zM283.01312 769.65888c-25.72288 0-46.592-20.70528-46.592-46.24384 0-25.47712 20.86912-46.22336 46.592-46.22336 25.68192 0 46.592 20.74624 46.592 46.22336C329.6256 748.9536 308.736 769.65888 283.01312 769.65888zM478.69952 418.6112l-167.7312 0c0-95.88736 73.64608-174.61248 167.7312-183.88992L478.69952 418.6112zM693.02272 769.65888c-25.74336 0-46.57152-20.70528-46.57152-46.24384 0-25.47712 20.84864-46.22336 46.57152-46.22336 25.68192 0 46.57152 20.74624 46.57152 46.22336C739.59424 748.9536 718.78656 769.65888 693.02272 769.65888zM571.86304 418.6112l0-183.88992c94.14656 9.25696 167.7312 87.9616 167.7312 183.88992L571.86304 418.6112z"  ></path>' +
    '' +
    '<path d="M321.80224 105.55392 309.9648 80.77312 187.392 139.38688 185.87648 139.1616 185.73312 140.16512 184.58624 140.71808 185.42592 142.47936 169.5744 259.87072 55.45984 302.40768 65.06496 328.13056 193.18784 280.39168 194.49856 280.576 194.60096 279.87968 195.2768 279.61344 194.80576 278.34368 210.96448 158.53568Z"  ></path>' +
    '' +
    '<path d="M155.11552 250.85952 155.19744 250.20416 155.91424 249.93792 155.40224 248.60672 171.56096 128.86016 282.4192 75.776 270.56128 51.01568 148.04992 109.64992 146.47296 109.44512 146.35008 110.4896 145.2032 111.02208 146.04288 112.7424 130.17088 230.1952 16.05632 272.65024 25.64096 298.41408 153.88672 250.69568Z"  ></path>' +
    '' +
    '<path d="M878.83776 988.18048 913.96096 872.16128 1031.80288 837.50912 1024.04096 811.15136 893.82912 849.46944 892.27264 848.9984 891.98592 850.00192 890.69568 850.37056 891.2896 852.31616 857.02656 965.46816 737.3824 989.45024 742.76864 1016.38144 876.72832 989.4912 878.30528 989.98272 878.55104 989.14304 879.02208 989.04064Z"  ></path>' +
    '' +
    '<path d="M844.0832 954.368 844.30848 953.61024 844.98432 953.48736 844.71808 952.2176 879.80032 836.52608 997.66272 801.83296 989.92128 775.4752 859.60704 813.83424 858.09152 813.38368 857.8048 814.36672 856.576 814.71488 857.12896 816.57856 822.80448 929.8944 703.30368 953.77408 708.68992 980.70528 842.67008 953.93792Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-car1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M281.6 819.2c-42.3424 0-76.8-34.4576-76.8-76.8s34.4576-76.8 76.8-76.8 76.8 34.4576 76.8 76.8-34.4576 76.8-76.8 76.8zM281.6 716.8c-14.1312 0-25.6 11.4688-25.6 25.6s11.4688 25.6 25.6 25.6 25.6-11.4688 25.6-25.6-11.4688-25.6-25.6-25.6z"  ></path>' +
    '' +
    '<path d="M742.4 819.2c-42.3424 0-76.8-34.4576-76.8-76.8s34.4576-76.8 76.8-76.8 76.8 34.4576 76.8 76.8-34.4576 76.8-76.8 76.8zM742.4 716.8c-14.1312 0-25.6 11.4688-25.6 25.6s11.4688 25.6 25.6 25.6 25.6-11.4688 25.6-25.6-11.4688-25.6-25.6-25.6z"  ></path>' +
    '' +
    '<path d="M868.2496 609.6384c-6.656-40.5504-28.3136-164.5568-51.7632-211.5072-15.616-31.232-55.7056-55.1424-119.0912-70.9632-51.5072-12.8512-117.3504-19.968-185.3952-19.968s-133.888 7.0656-185.3952 19.968c-63.3856 15.872-103.4752 39.7312-119.0912 70.9632-23.4496 46.8992-45.1072 170.9568-51.7632 211.5072-35.7888 24.5248-53.3504 60.0064-53.3504 107.1616l0 128c0 33.3824 21.4016 61.8496 51.2 72.3968l0 55.6032c0 28.2112 22.9888 51.2 51.2 51.2l51.2 0c28.2112 0 51.2-22.9888 51.2-51.2l0-51.2 409.6 0 0 51.2c0 28.2112 22.9888 51.2 51.2 51.2l51.2 0c28.2112 0 51.2-22.9888 51.2-51.2l0-55.6032c29.7984-10.5472 51.2-39.0144 51.2-72.3968l0-128c0-47.1552-17.5616-82.6368-53.3504-107.1616zM253.2864 421.0688c15.2064-30.3616 111.0016-62.6688 258.7136-62.6688s243.5072 32.256 258.7136 62.6688c14.6944 29.44 31.0272 107.3152 41.1136 162.9696-5.0176-1.4848-10.1888-2.8672-15.5136-4.096-13.6704-3.2256-28.416-5.8368-44.1856-7.9872l-148.4288-106.3424c-11.4688-8.2432-27.4944-5.5808-35.7376 5.888s-5.5808 27.4944 5.888 35.7376l80.1792 57.4464c-43.52-1.4336-91.2384-1.4336-142.08-1.4336-5.9904 0-11.9296 0-17.8688 0l-147.1488-98.0992c-11.776-7.8336-27.648-4.6592-35.4816 7.1168s-4.6592 27.648 7.1168 35.4816l84.1728 56.1152c-68.6592 1.2288-128.3584 4.9664-175.104 16.0768-5.3248 1.28-10.496 2.6624-15.5136 4.096 10.1376-55.6544 26.4192-133.5296 41.1648-162.9696zM256 972.8l-51.2 0 0-51.2 51.2 0 0 51.2zM768 972.8l0-51.2 51.2 0 0 51.2-51.2 0zM870.4 844.8c0 14.1312-11.4688 25.6-25.6 25.6l-665.6 0c-14.1312 0-25.6-11.4688-25.6-25.6l0-128c0-47.3088 24.8832-72.5504 85.9136-87.0912 64.256-15.3088 160.768-15.3088 272.4864-15.3088s208.1792 0 272.4864 15.3088c61.0304 14.5408 85.9136 39.7824 85.9136 87.0912l0 128z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icon" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M263.961 779.371c25.473 0 46.644-19.793 48.294-45.101 0.141-1.213 0.211-2.324 0.211-3.39 0-1.146-0.073-2.402-0.213-3.642-1.825-25.171-23.004-44.865-48.292-44.865-7.109 0-13.881 1.492-20.127 4.434-10.532 4.782-18.995 13.202-23.805 23.65-2.547 5.387-4.014 11.049-4.365 16.83-0.127 1.158-0.193 2.395-0.193 3.591 0 1.114 0.065 2.253 0.196 3.389 1.663 25.31 22.835 45.103 48.295 45.103zM230.084 728.753l0.038-0.441c0.222-3.982 1.235-7.904 3.041-11.725 3.39-7.364 9.322-13.258 16.703-16.598l0.108-0.050c4.31-2.037 9.016-3.070 13.988-3.070 17.76 0 32.626 13.852 33.845 31.537l0.032 0.346c0.086 0.737 0.134 1.492 0.134 2.128 0 0.535-0.043 1.139-0.129 1.848l-0.041 0.445c-1.079 17.778-15.944 31.704-33.841 31.704-17.886 0-32.752-13.928-33.842-31.709l-0.041-0.44c-0.078-0.634-0.116-1.239-0.116-1.848 0-0.71 0.042-1.465 0.122-2.127zM429.152 740.647h169.96v-43.48h-169.96v43.48zM981.267 479.578c-0.413-5.204-1.454-10.083-3.176-14.897-9.226-27.963-35.115-46.721-64.549-46.721h-130.868c-8.821-103.749-95.81-184.156-200.659-184.156h-189.097c-104.843 0-191.837 80.407-200.674 184.156h-84.471c-37.532 0-68.066 30.522-68.066 68.039v191.083c0 29.855 36.408 46.877 48.371 52.469 19.239 8.994 38.216 14.514 39.015 14.743l2.955 0.853h13.98c6.889 60.313 58.377 106.671 119.935 106.671 63.501 0 116.291-49.323 120.468-112.406 0.336-2.938 0.506-5.805 0.506-8.532 0-2.925-0.175-6.067-0.511-9.124-4.608-62.752-57.427-111.836-120.463-111.836-17.753 0-34.655 3.713-50.24 11.035-26.235 11.926-47.313 32.892-59.379 59.058-3.323 7.034-5.898 14.272-7.73 21.652h-10.247c-4.626-1.458-14.425-4.716-24.928-9.278-20.24-8.789-26.601-15.181-28.248-17.221v-189.168c0-13.541 11.029-24.558 24.586-24.558h805.769c10.649 0 20.015 6.836 23.305 17.009l0.268 0.779c0.444 1.213 0.701 2.425 0.81 3.815l0.010 0.129c0.096 1.129 0.178 2.103 0.178 2.827v191.083c0 13.557-11.022 24.585-24.572 24.585h-30.492c-13.108-52.828-61.128-91.746-117.247-91.746-17.768 0-34.67 3.713-50.241 11.036-26.251 11.929-47.322 32.888-59.359 59.046-6.331 13.343-9.991 27.436-10.877 41.897-0.325 3.003-0.495 6.092-0.495 8.98 0 2.738 0.17 5.607 0.506 8.538 4.175 63.083 56.965 112.4 120.467 112.4 61.558 0 113.049-46.357 119.936-106.671h27.803c37.523 0 68.052-30.534 68.052-68.066v-191.080c-0.002-2.526-0.181-4.681-0.327-6.42zM186.747 726.38l0.127-1.425c0.504-9.056 2.798-17.951 6.817-26.44l0.103-0.22c7.71-16.762 21.212-30.187 38.021-37.801l0.303-0.14c9.783-4.614 20.495-6.953 31.845-6.953 40.449 0 74.324 31.561 77.12 71.851l0.091 0.992c0.181 1.564 0.28 3.212 0.28 4.639 0 1.177-0.089 2.498-0.263 3.926l-0.121 1.32c-2.463 40.492-36.332 72.21-77.108 72.21-40.768 0-74.632-31.718-77.094-72.211l-0.139-1.465c-0.163-1.262-0.245-2.535-0.246-3.782 0-1.503 0.094-3.102 0.264-4.5zM235.922 417.96c8.652-79.542 76.038-140.676 156.995-140.676h189.097c80.962 0 148.344 61.134 156.981 140.676h-503.073zM843.033 734.678l-0.137 1.45c-2.463 40.492-36.327 72.211-77.096 72.211-40.776 0-74.644-31.718-77.107-72.211l-0.123-1.334c-0.174-1.414-0.262-2.73-0.262-3.912 0-1.433 0.099-3.075 0.279-4.624l0.112-1.303c0.503-9.063 2.8-17.945 6.823-26.397l0.133-0.283c7.68-16.746 21.171-30.163 37.992-37.776l0.317-0.146c9.764-4.611 20.476-6.949 31.834-6.949 40.442 0 74.31 31.561 77.108 71.851l0.106 1.114c0.172 1.409 0.266 3.012 0.266 4.514 0 1.245-0.083 2.522-0.247 3.796zM765.789 682.375c-7.012 0-13.967 1.533-20.126 4.435-10.532 4.781-18.996 13.201-23.806 23.648-2.545 5.383-4.014 11.045-4.366 16.83-0.126 1.154-0.192 2.39-0.192 3.593 0 1.119 0.065 2.258 0.195 3.388 1.664 25.308 22.835 45.102 48.295 45.102 25.473 0 46.642-19.791 48.293-45.097 0.144-1.214 0.214-2.325 0.213-3.393 0-1.147-0.074-2.404-0.215-3.644-1.824-25.169-23.002-44.862-48.29-44.862zM799.67 732.72l-0.041 0.453c-1.079 17.778-15.943 31.705-33.841 31.704-17.886 0-32.752-13.928-33.842-31.709l-0.040-0.44c-0.078-0.629-0.115-1.233-0.115-1.848 0-0.716 0.042-1.472 0.119-2.128l0.037-0.439c0.224-3.986 1.235-7.909 3.042-11.727 3.39-7.364 9.322-13.259 16.703-16.598l0.107-0.051c4.309-2.036 9.015-3.070 13.987-3.069 17.76 0 32.627 13.852 33.844 31.536l0.034 0.355c0.086 0.733 0.134 1.486 0.134 2.12 0 0.535-0.042 1.138-0.129 1.842z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-car2" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M921.6 646.4 102.4 646.4 102.4 595.2l774.4 0 0-64-115.2-70.4 25.6-44.8 140.8 83.2L928 646.4z"  ></path>' +
    '' +
    '<path d="M153.6 550.4 102.4 537.6l83.2-352 454.4 0 64 281.6L230.4 467.2 230.4 416l403.2 0L595.2 230.4 224 230.4 153.6 550.4z"  ></path>' +
    '' +
    '<path d="M716.8 800c-57.6 0-102.4-44.8-102.4-102.4l51.2 0c0 25.6 25.6 51.2 51.2 51.2 25.6 0 51.2-25.6 51.2-51.2l51.2 0C819.2 755.2 774.4 800 716.8 800z"  ></path>' +
    '' +
    '<path d="M281.6 800c-57.6 0-102.4-44.8-102.4-102.4l51.2 0c0 25.6 25.6 51.2 51.2 51.2 25.6 0 51.2-25.6 51.2-51.2L384 697.6C384 755.2 339.2 800 281.6 800z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-car3" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M94.786807 616.919585 94.786807 234.941893c0-21.22644 17.200754-38.433334 38.416961-38.433334l381.616464 0c21.216207 0 38.414915 17.206894 38.414915 38.433334l0 381.979738c0 7.076162-5.731538 12.809747-12.805654 12.809747L107.59246 629.731378C100.518345 629.731378 94.786807 623.997793 94.786807 616.919585zM402.952398 747.776911c0 44.024679-35.673477 79.713506-79.676667 79.713506-44.004213 0-79.678714-35.687804-79.678714-79.713506 0-44.022633 35.673477-79.713506 79.678714-79.713506C367.278921 668.063405 402.952398 703.754279 402.952398 747.776911zM363.113041 747.776911c0-22.011316-17.836227-39.85573-39.839357-39.85573-22.001083 0-39.841404 17.844413-39.841404 39.85573 0 22.013363 17.84032 39.859823 39.841404 39.859823C345.277838 787.636734 363.113041 769.791298 363.113041 747.776911zM254.650771 668.063405 76.104305 668.063405c-7.072069 0-12.805654 5.735631-12.805654 12.811794l0 38.865169c0 7.076162 5.733585 12.811794 12.805654 12.811794L219.216747 732.552162C222.953861 706.907085 235.894591 684.250062 254.650771 668.063405zM819.841204 747.776911c0 44.024679-35.673477 79.713506-79.678714 79.713506s-79.676667-35.687804-79.676667-79.713506c0-44.022633 35.671431-79.713506 79.676667-79.713506S819.841204 703.754279 819.841204 747.776911zM780.003893 747.776911c0-22.011316-17.838274-39.85573-39.841404-39.85573-22.005176 0-39.83731 17.844413-39.83731 39.85573 0 22.013363 17.836227 39.859823 39.83731 39.859823C762.166643 787.636734 780.003893 769.791298 780.003893 747.776911zM960.700325 680.875199l0 38.865169c0 7.076162-5.731538 12.811794-12.805654 12.811794L844.218404 732.552162c-7.414877-50.877761-51.183729-90.110297-104.051821-90.110297-52.880371 0-96.649224 39.234583-104.066147 90.110297L427.333692 732.552162c-3.737114-25.644053-16.675798-48.303122-35.429931-64.488757l197.946304 0L589.850066 301.626665c0-14.152325 11.467169-25.625634 25.611308-25.625634l120.893394 0c34.040281 0 65.853847 16.917298 84.901669 45.140083l77.936023 115.482151C910.621766 453.563076 916.732951 473.534943 916.732951 493.974461l0 174.089967 31.16172 0C954.968787 668.063405 960.700325 673.799036 960.700325 680.875199zM830.795697 439.58062l-62.322417-88.597851c-2.39863-3.406586-6.305613-5.435803-10.472516-5.435803l-97.208972 0c-7.072069 0-12.8077 5.735631-12.8077 12.811794l0 88.595804c0 7.076162 5.733585 12.811794 12.8077 12.811794l159.533436 0C830.699506 459.766358 836.767711 448.068945 830.795697 439.58062z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiakechong" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M17.488 652.256c11.728-35.648 25.76-91.84 58-132.016 48.288-60.112 71.456-67.392 88.464-117.184 0 0 42.896-199.472 311.696-199.472 229.04 0 324.784 213.808 324.784 213.808S1009.76 454.416 1009.76 594.176c0 139.76-78.528 148.048-78.528 148.048l-5.664 0c-14.992 39.248-52.848 67.152-97.216 67.152s-82.24-27.904-97.216-67.152l-451.536 0.112c-15.008 39.232-52.848 67.04-97.216 67.04-44.304 0-82.128-27.808-97.136-67.04L58.064 742.336C58.064 742.336 0.112 705.088 17.488 652.256L17.488 652.256zM505.824 438.24l231.52 0c0 0-31.104-59.536-93.92-104.608-64.432-46.24-137.6-64.464-137.6-64.464L505.824 438.24 505.824 438.24zM437.792 438.992l0-168.64c0 0-85.36 7.424-145.776 52.032-60.912 44.944-86.416 116.592-86.416 116.592L437.792 438.976 437.792 438.992zM437.792 438.992"  ></path>' +
    '' +
    '<path d="M1008.544 681.776 1008.544 681.776 1008.544 681.776 1008.544 681.776z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-car4" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M106.082572 561.314149l798.714024 0 0 35.032888-798.714024 0 0-35.032888Z"  ></path>' +
    '' +
    '<path d="M851.368756 771.512499 192.731024 771.512499c-57.483202 0-104.230899-47.13553-104.230899-105.098663L88.500125 351.113753c0-57.954947 46.74872-105.099686 104.230899-105.099686l525.258978 0c43.086307 0 79.896678 23.581068 96.108918 61.538565l133.954875 312.005037c14.309914 33.596166 10.648524 72.341608-9.800203 103.662965C918.516062 753.47468 886.04451 771.512499 851.368756 771.512499M192.731024 281.047977c-38.321794 0-69.505004 31.423687-69.505004 70.065775l0 315.299059c0 38.643112 31.18321 70.066799 69.505004 70.066799l658.638755 0c23.280216 0 44.391023-11.853979 57.888432-32.510438 14.007015-21.460778 16.582677-47.820122 6.900154-70.520123l-133.955898-312.00606c-10.631128-24.931832-35.234479-40.396035-64.212464-40.396035L192.731024 281.046954z"  ></path>' +
    '' +
    '<path d="M757.294171 667.302065c38.10076 0 69.01177 31.18628 69.01177 69.63087 0 38.445614-30.91101 69.613474-69.01177 69.613474-38.117133 0-69.028143-31.16786-69.028143-69.613474C688.266028 698.487322 719.177038 667.302065 757.294171 667.302065M757.294171 632.268154c-57.19463 0-103.757109 46.949288-103.757109 104.663758 0 57.698097 46.562479 104.646362 103.757109 104.646362S861.033883 794.630009 861.033883 736.932935C861.033883 679.217443 814.487777 632.268154 757.294171 632.268154"  ></path>' +
    '' +
    '<path d="M271.119349 667.302065c38.10076 0 69.012793 31.18628 69.012793 69.63087 0 38.445614-30.912034 69.613474-69.012793 69.613474-38.118156 0-69.029166-31.16786-69.029166-69.613474C202.090183 698.487322 233.002216 667.302065 271.119349 667.302065M271.119349 632.268154c-57.193607 0-103.756085 46.949288-103.756085 104.663758 0 57.698097 46.561455 104.646362 103.756085 104.646362 57.19463 0 103.739712-46.948265 103.739712-104.646362C374.859062 679.217443 328.313979 632.268154 271.119349 632.268154"  ></path>' +
    '' +
    '<path d="M557.530474 666.413835l-52.089355 0c-9.597589 0-17.364483-7.826246-17.364483-17.517979 0-9.680477 7.766894-17.514909 17.364483-17.514909l52.089355 0c9.597589 0 17.36346 7.834432 17.36346 17.514909C574.893934 658.586566 567.128063 666.413835 557.530474 666.413835"  ></path>' +
    '' +
    '<path d="M881.347534 526.280238l-0.339738 0L626.984313 526.280238c-28.724205 0-52.090379-23.571858-52.090379-52.549843L574.893934 368.631732c0-28.969798 23.366174-52.549843 52.090379-52.549843l178.925089 0c6.91755 0 13.19144 4.15667 15.939017 10.562567l73.827449 172.223456c1.914606 2.822278 3.034103 6.217608 3.034103 9.895371C898.709971 518.453992 890.945123 526.280238 881.347534 526.280238M626.984313 351.113753c-9.581216 0-17.364483 7.851828-17.364483 17.516956l0 105.099686c0 9.665127 7.782244 17.516956 17.364483 17.516956l227.588415 0-60.093657-140.133597L626.984313 351.113753z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-car5" viewBox="0 0 1307 1024">' +
    '' +
    '<path d="M0 741.491673l0-82.376194 1224.803007 0 0-100.242612-184.313644-111.612151 42.017861-70.618255L1306.437709 512.1942 1306.437709 741.491673 0 741.491673zM204.122065 370.745836l643.120444 0-63.485811-288.369642L195.789111 82.376194 80.610738 585.954967l-79.586773-18.501983L130.820317 0l718.434813 0 99.818903 453.12203L204.122065 453.12203 204.122065 370.745836zM285.792076 941.588497c45.019137 0 81.670011-36.968656 81.670011-82.376194l81.670011 0c0 90.885694-73.266439 164.787697-163.304714 164.787697s-163.304714-73.902003-163.304714-164.787697l81.670011 0C204.122065 904.584532 240.772939 941.588497 285.792076 941.588497zM979.828282 941.588497c45.019137 0 81.670011-36.968656 81.670011-82.376194l81.670011 0c0 90.885694-73.23113 164.787697-163.304714 164.787697s-163.304714-73.902003-163.304714-164.787697l81.670011 0C898.19358 904.584532 934.809145 941.588497 979.828282 941.588497z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xjt" viewBox="0 0 1751 1024">' +
    '' +
    '<path d="M1684.645161 548.335484l-102.4-122.219355c-26.425806-26.425806-56.154839-36.335484-85.883871-49.548387-36.335484-13.212903-72.670968-26.425806-99.096774-66.064516l-115.612903-175.070968c-39.63871-66.064516-112.309677-105.703226-188.283871-105.703226l-848.929032 0c-95.793548 0-175.070968 79.277419-175.070968 175.070968l0 287.380645c0 23.122581-9.909677 29.729032-29.729032 42.941935-16.516129 13.212903-42.941935 29.729032-33.032258 69.367742l29.729032 151.948387c23.122581 95.793548 122.219355 95.793548 155.251613 95.793548l66.064516 0c6.606452 82.580645 75.974194 145.341935 161.858065 145.341935 82.580645 0 151.948387-62.76129 161.858065-145.341935l545.032258 0c6.606452 82.580645 75.974194 145.341935 161.858065 145.341935 82.580645 0 151.948387-62.76129 161.858065-145.341935l79.277419 0c46.245161 0 92.490323-19.819355 125.522581-56.154839 16.516129-9.909677 75.974194-49.548387 75.974194-148.645161C1720.980645 584.670968 1691.251613 554.941935 1684.645161 548.335484zM1086.76129 66.064516c66.064516 0 125.522581 33.032258 158.554839 89.187097l118.916129 175.070968c13.212903 19.819355 26.425806 33.032258 39.63871 42.941935l-320.412903 0c-56.154839 0-105.703226-29.729032-128.825806-79.277419l-112.309677-224.619355L1086.76129 69.367742zM412.903226 967.845161c-72.670968 0-128.825806-59.458065-128.825806-128.825806 0-72.670968 59.458065-128.825806 128.825806-128.825806 72.670968 0 128.825806 59.458065 128.825806 128.825806C545.032258 911.690323 485.574194 967.845161 412.903226 967.845161zM1281.651613 967.845161c-72.670968 0-128.825806-59.458065-128.825806-128.825806 0-72.670968 59.458065-128.825806 128.825806-128.825806 69.367742 0 128.825806 59.458065 128.825806 128.825806C1410.477419 911.690323 1351.019355 967.845161 1281.651613 967.845161zM1628.490323 769.651613l-3.303226 0-3.303226 3.303226c-26.425806 29.729032-62.76129 46.245161-99.096774 46.245161l-79.277419 0c-6.606452-82.580645-75.974194-145.341935-161.858065-145.341935-82.580645 0-151.948387 62.76129-161.858065 145.341935l-545.032258 0c-6.606452-82.580645-75.974194-145.341935-161.858065-145.341935-82.580645 0-151.948387 62.76129-161.858065 145.341935l-66.064516 0c-72.670968 0-109.006452-23.122581-122.219355-69.367742l-29.729032-151.948387c-3.303226-16.516129 3.303226-23.122581 19.819355-36.335484 16.516129-13.212903 42.941935-29.729032 42.941935-69.367742l0-287.380645c0-79.277419 66.064516-142.03871 142.03871-142.03871l568.154839 0 118.916129 241.135484c29.729032 59.458065 92.490323 99.096774 158.554839 99.096774l383.174194 0c3.303226 0 6.606452 3.303226 9.909677 3.303226 29.729032 9.909677 56.154839 19.819355 75.974194 39.63871l102.4 122.219355 3.303226 3.303226c0 0 26.425806 16.516129 26.425806 72.670968C1687.948387 739.922581 1628.490323 769.651613 1628.490323 769.651613z"  ></path>' +
    '' +
    '<path d="M1232.103226 521.909677l-194.890323 0c-9.909677 0-16.516129-6.606452-16.516129-16.516129s6.606452-16.516129 16.516129-16.516129l194.890323 0c9.909677 0 16.516129 6.606452 16.516129 16.516129S1242.012903 521.909677 1232.103226 521.909677z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)