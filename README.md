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

Module 1
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
			