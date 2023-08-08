# Web-developer
Module 1
Обучение Web-разработчик на UDEMY от Ивана Петриченко (https://www.udemy.com/home/my-courses/learning/)
IDE Visual Studio Code https://code.visualstudio.com/
	plugins:
		All Autocomplete
		Auto Complete Tag
		Code Runner
		JavaScript (ES6) code snippets
		Live Server
		Multiple clipboards for VSCode
		Sass
		Theme - Oceanic Next (опционально)
		vscode-icons
Node.js 18.16.0 https://nodejs.org/en
Photoshop CC-2017.0.1.64bit https://drive.google.com/file/d/1ZfXB25wEiymtDCzKc1gpzirUu1Pq8MrM/view (не работает)
	.psd - формат файлов (examples https://www.freeimages.com/psd)
	виды/форматы графики
		- ru https://itblog21.ru/jpg-gif-png-i-svg-kakoj-format-dlya-interneta-luchshe
		- en https://blog.hubspot.com/insiders/different-types-of-image-files
			 https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types
Современные редакторы
	Avocode - https://avocode.com/ (сейчас не работает)
	Inspect https://inspect.ceros.com/design-upload
	Zeplin - https://zeplin.io/ аналог Avocode/Inspect
		экстеншены https://extensions.zeplin.io/
		нужно установить плагин для Photoshop (Zeplin > Adobe Photoshop Integration)
	PSDTECH - сейчас https://figpea.com/
	Marsy - https://www.markupeasy.ru/
	Figma - https://www.figma.com/ предназначены для дизайнеров/верстальщиков/заказчиков
		работает с форматом скетч не .psd (есть онлайн конвертация)
Конверторы в SVG формат (векторный)
	https://www.vectorizer.io/
	https://convertio.co/ru/
	https://www.online-convert.com/
HTML справочники
	https://webref.ru/html
	спец символы https://html5book.ru/specsimvoly-html/
CSS links and books
	CSS colours - https://www.rapidtables.com/web/css/css-color.html
	color converter https://colorscheme.ru/color-converter.html
	attribute style - https://webref.ru/html/attr/style
	1 справочник CSS - https://webref.ru/css
	2 справочник CSS https://cssreference.io/
	CSS information https://sitehere.ru/tablica-stilej-css-v-udobnom-vide
	CSS selectors 		https://learn.javascript.ru/css-selectors
		каскадность  	https://web.archive.org/web/20220630044616/https://idg.net.ua/blog/uchebnik-css/azy-css/kaskadnost
	books
		1. CSS. Карманный справочник https://ozon.by/search/?deny_category_prediction=true&from_global=true&text=CSS.+%D0%9A%D0%B0%D1%80%D0%BC%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9+%D1%81%D0%BF%D1%80%D0%B0%D0%B2%D0%BE%D1%87%D0%BD%D0%B8%D0%BA&product_id=135656602
		2. Новая большая книга CSS https://ozon.by/search/?deny_category_prediction=true&from_global=true&text=%D0%9D%D0%BE%D0%B2%D0%B0%D1%8F+%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%B0%D1%8F+%D0%BA%D0%BD%D0%B8%D0%B3%D0%B0+CSS+%7C+%D0%9C%D0%B0%D0%BA%D1%84%D0%B0%D1%80%D0%BB%D0%B0%D0%BD%D0%B4+%D0%94%D1%8D%D0%B2%D0%B8%D0%B4+%D0%A1%D0%BE%D0%B9%D0%B5%D1%80&product_id=135731189
		
CSS block
	Margin – допуск, запас, край
	Border – граница
	Padding – прокладка
	 вида каждого элемента лево/права, вверх/низ
	 
	 Lorem - рыбный текст
Console разработчика - в Google Chrome лучшее (еще Mozilla Firefox)
	можем динамически редактировать любые теги, стили и т.д.
	в консоле таба styles, а есть computed - можем все применные стили посмотреть и font
Блочный CSS 
	display https://cssreference.io/property/display/
	position https://cssreference.io/property/position/
	5 types: position: static, relative, absolute, fixed, inherit
	vertical-align https://cssreference.io/property/vertical-align/
Единицы измеерения CSS
	https://caniuse.com/
	http://htmlbook.ru/content/edinitsy-izmereniya
	https://www.w3.org/Style/Examples/007/units.ru.html
Flexbox - (современная технология) Flexbox по праву можно назвать удачной попыткой решения огромного спектра проблем при построении лейаутов в css.
	https://web.archive.org/web/20210718095533/https://html5.by/blog/flexbox/
	https://habr.com/ru/articles/313938/
	
	display: flex; (блок в котором будут элементы)
	justify-content: space-around; - выравнивание по главное оси (row)
	align-items: center; - выравнивание по поперечной (column)
	flex-wrap: wrap;
	flex-direction: column; - почти никогда не используется
	flex-direction: row; (by default)
	Основные свойства flex-контейнера. Главная и поперечная ось.
Normalizing (сброс стилей) reset.css/normalize.css
	normalizing - более продвинутая библиотека
	в bootstrap уже по дефолту есть
	https://necolas.github.io/normalize.css/
	https://htmlacademy.ru/blog/html/about-normalize-css
	resources https://cdnjs.com/libraries/normalize
Font
	font-family: https://developer.mozilla.org/ru/docs/Web/CSS/font-family
		может поддерживать несколько шрифтов (по приоритету)
	google шрифты: https://fonts.google.com/
	скачать различные шрифты: https://webfonts.pro/
	@font-face generator конвертация шрифтов: https://transfonter.org/
	форматы шрифтов: https://webformyself.com/ponyatie-formatov-shriftov-i-kak-vyzhat-iz-nix-maksimum-dlya-veb/
	3 типа подключения:
		локальные шрифты (грузятся с локальной машины)- никогда не используется
		удаленные подключение - к примеру google fonts
		скачаенные шрифты
	современные форматы WOFF, WOFF2
	fonts подключать нужно перед использованием к примеру 
		<link href="css/fonts.css" rel="stylesheet">
		<link href="css/style.css" rel="stylesheet">

Module 1-2
	Библиотека Bootstrap 4
		bootstrap на русском https://getbootstrap.ru/docs/v4-alpha/
		документация bootstrap https://getbootstrap.com/
		https://getbootstrap.com/docs/5.3/getting-started/introduction/
	Препроцессоры SASS/SCSS/LESS
		документация SASS на английском https://sass-lang.com/
			на русском https://sass-scss.ru/documentation/
		компилятор https://scout-app.io/
		Компилятор Koala http://koala-app.com/
		настройка плаги VSC https://github.com/ritwickdey/vscode-live-sass-compiler/blob/master/docs/settings.md
		LESS - программируемый язык стилей https://habr.com/ru/articles/136525/
		
		Plugin для VCS- Live Sass Compiler 
			настройки плагина SASS https://github.com/glenn2223/vscode-live-sass-compiler/blob/HEAD/docs/settings.md
		
		SASS/SCSS/LESS - принцип одинаков (отличается к примеру синтаксис) LESS - перестал развиваться
	Вендорные префиксы в CSS - используются для разные браузеров (autoprefix)
		https://doka.guide/css/vendor-prefixes/
	CSS to SASS converter
		https://jsonformatter.org/css-to-sass
	transform https://html5book.ru/css3-transform/
	Псевдоклассы и псевдоэлементы в CSS
		документация - https://webref.ru/css#pseudo-class
		описание - https://html5book.ru/psevdoklassy/
		transition - плавный переход https://webref.ru/css/transition
	life style image http://htmlbook.ru/css/list-style-image
	icons (иконочные шрифты - можно генерировать иконочные шрифты, подключаем как обычный шрифт @font-family и используем код как в документации)
		ресурс для поиска иконок https://seeklogo.com/
		Icons https://fontawesome.com/
		создать свой иконочный тип https://icomoon.io/app/#/select
		еще иконок https://www.flaticon.com/
	Адаптация под различные устройства
		удобство и SEO оптимизация (чем адаптивен - тем популярен)
			проверять как ведет себя при разных размеров (live edit в режиме разработчика в chrome)
		медиазапросы https://html5book.ru/css3-mediazaprosy/
	Адаптивность bootstrap
		https://getbootstrap.com/docs/4.3/layout/grid/
		Вертикальное выравнивание https://getbootstrap.com/docs/4.3/layout/grid/#vertical-alignment
	Техника Pixel perferct - можно проверять как сайт соответствует дизайну
		chrome plugin https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi
	Локальные ссылки и favicon (для SEO оптимизации)
		сервис favicon https://pr-cy.ru/favicon/
		как подключить http://htmlbook.ru/faq/kak-dobavit-ikonku-sayta-v-adresnuyu-stroku-brauzera
	UX
		к примеру рекомендуется удалять hover для mobile
	Домен, Хостинг и GitHub Pages
		Домен - https://www.udemy.com/ все что после - URL
		Хостинг - удаленная папка с которого запускается запуска
			есть платные и бесплатные(с ограничениями)
		GitHub Pages - бесплатный хостинг (можно использовать как сайт портфолио)
			1 аккаунт - 1 репозиторий
			https://pages.github.com/
		про разницу в доменных именах https://www.divier.ru/stati/domeny_i_domennye_imena_v_chem_raznitsa/
Module 3
	GIT https://git-scm.com/
		обучение GITу https://githowto.com/ru
		интерактивное обучение https://learngitbranching.js.org/
		git kraken https://www.gitkraken.com/
	Gulp (планировщик задач) позволяет автоматизировать процессы, к примеру sass компиляция
		аналог build tools (ant, maven, gradle)
		построен на java script
		для работы, нужен node.js
			Node.js представляет среду выполнения кода на JavaScript, которая построена на основе движка JavaScript Chrome V8, который позволяет транслировать вызовы на языке JavaScript в машинный код. 
			Node.js прежде всего предназначен для создания серверных приложений на языке JavaScrip
		packages
		gulp - https://gulpjs.com/
			gulp-sass https://www.npmjs.com/package/gulp-sass
			browser sync https://browsersync.io/
				localhost:3001 настройки browser sync (полезно)
			gulp-autoprefixer https://www.npmjs.com/package/gulp-autoprefixer
			gulp-rename https://www.npmjs.com/package/gulp-rename
			gulp-clean-css https://www.npmjs.com/package/gulp-clean-css
			по настройки задач можно смотреть документацию
				как на мавене или ант (подключение какой либо библиотеки)
			решение проблем команды gulp (с доступом могут быть проблемы)

	БЭМ методология (блок элемент модификатор)
		https://ru.bem.info/methodology/
		блок - может повторно использован (либо может)
	Forms
		https://htmlbook.ru/html/input/type
	JavaScript
		https://learn.javascript.ru/
	Slider (Slick-слайдер)
		slick documentation https://kenwheeler.github.io/slick/
		jquery doc 	https://jquery.page2page.ru/index.php5/%D0%97%D0%B0%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0
					https://page2page.lohmach.info/index.php5/%D0%97%D0%B0%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0.html
		другие варианты
			owl slider https://owlcarousel2.github.io/OwlCarousel2/
			tiny slider https://github.com/ganlanyuan/tiny-slider
			bootstrap slider https://getbootstrap.com/docs/4.3/components/carousel/
	Табы (вкладки)
		jQuery tabs https://denis-creative.com/jquery-tabs/
		bootstrap tabs https://getbootstrap.com/docs/4.3/components/navs/#javascript-behavior
		Calc() in CSS https://css-tricks.com/a-complete-guide-to-calc-in-css/
	Maps
		yandex constructor https://yandex.ru/map-constructor/
	Modal windows
		bootrstrap - https://getbootstrap.com/docs/4.3/components/modal/
		Magnific Popup https://dimsemenov.com/plugins/magnific-popup/documentation.html
	Form validation
		https://jqueryvalidation.org/
	Маски ввода https://plugins.jquery.com/maskedinput/
		докуметация https://github.com/digitalBush/jquery.maskedinput
	Локальные сервера
		windows/linux https://ospanel.io/ (better for windows)
		mac/windows https://www.mamp.info/en/windows/
	Mail
		php mailer documentation https://github.com/PHPMailer/PHPMailer
		smtp конфигурация https://support.google.com/a/answer/176600?hl=ru#:~:text=%D0%9F%D0%BE%D0%BB%D0%BD%D0%BE%D0%B5%20%D0%B4%D0%BE%D0%BC%D0%B5%D0%BD%D0%BD%D0%BE%D0%B5%20%D0%B8%D0%BC%D1%8F%20%D1%81%D0%BB%D1%83%D0%B6%D0%B1%D1%8B%20SMTP%20%E2%80%93%20smtp.gmail.com.,%D0%9F%D0%BE%D1%80%D1%82%2025%2C%20465%20%D0%B8%D0%BB%D0%B8%20587.
		пароли для приложений 	https://doc.camkubik.com/ru:info:smtp_passwords
								https://support.google.com/accounts/answer/185833?hl=en
	Плавная прокрутка вверх (Smooth Scroll)
		https://www.w3schools.com/howto/howto_css_smooth_scroll.asp
	Анимация
		https://html5book.ru/css3-animation
		библиотеки
			https://animate.style/
			https://wowjs.uk/
	Валидация сайта (проверить перед заливкой, типа как sonar check)
		https://validator.w3.org/
		плагин для VSC Visual Studio Code
		https://marketplace.visualstudio.com/items?itemName=Umoxfo.vscode-w3cvalidation
	Реальный домен/хостинг
		SSL https://hostenko.com/wpcafe/tutorials/wordpress-ssl-https/
		как создать subdomen https://hosting-ninja.ru/rating/linkhost/videouroki.html?video=7
		платный хостинг https://link-host.net/hosting/
		FTP client FileZilla https://filezilla-project.org/
		
		
