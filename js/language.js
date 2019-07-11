var arrLang = {
    // 'Eng': {
    //     'abo':'About',
    //     'serv':'Services',
    //     'proj':'Projects',
    //     'cont':'Contacts',
    //     'our_t':'Our Team',
    //     'motto':'We deliver IT-products that actually <span class="top"> RAISE</span> you up and optimize business processes up to the point that makes <span class="top">SENSE</span>',
    //     'ai':'AI Technology &amp; Machine Learning',
    //     'cvar':'Computer vision and recommendation system ED technologies',
    //     'engaging':'Engaging experiences with interactive details, pushing pixels to the limit.Your concept deserves spot-on execution.',
    //     'web':'Web &amp; Mobile Development',
    //     'earap':'Every app requires an appropriate engine – a team with a multifaceted approach to the complete product development lifecycle.',
    //     '3d':'3D Visualisation',
    //     '3dv':'3D visualization is also an art that requires both artistic and technical skill. 3D artists use tools such as Autodesk 3ds Max, Maya, and Cinema 4D to create stunning visualizations that can be used in any industry.',
    //     'aicv':'AI &amp; Computer Vision', 
    //     'aib':'AI-based ED technology for entrance exams and proctoring',
    //     'cvml':'Computer Vision &amp; Machine Learning', 
    //     'aip':'AI platform to detect rule violations in crosswalks',
    //     'va':'Virtual Assistant', 
    //     'srb':'Speech Recognition based offline virtual assistant',
    //     'mc':'Motion Capturing',
    //     'imc':'Inertial motion capturing AR controller',
    //     'part':'Partners',
    //     // 'addr': '<span class="span">Address: </span>9, Ziyolilar str., M.Ulugbek district,Tashkent city, 100170', 
    //     // 'phone_t':'Phone:',
    //     // 'email':'E-mail:', 
    // },

    'Рус':{
        'abo':'О нас',
        'serv':'Сервисы',
        'proj':'Проекты',
        'cont':'Контакты',
        'our_t':'Наша команда',
        'motto':'Мы поставляем IT-продукты, которые действительно поднимают вас и оптимизируют бизнес-процессы до уровня, который имеет смысл',
        'ai':'Технология ИИ &amp; Машинное обучение',
        'cvar':'Система компьютерного зрения и рекомендации ED технологий',
        'engaging':'Взаимодействие с интерактивными деталями, доведение пикселей до предела. Ваша концепция заслуживает точного исполнения.',
        'web':'Интернет &amp; Мобильная разработка',
        'earap':'Каждое приложение требует соответствующего движка - команды с многогранным подходом к полному жизненному циклу разработки продукта.',
        '3d':'3D визуализация',
        '3dv':'3D визуализация - это тоже искусство, которое требует как художественных, так и технических навыков. 3D-художники используют такие инструменты, как Autodesk 3ds Max, Maya и Cinema 4D, для создания потрясающих визуализаций, которые можно использовать в любой отрасли.',
        'aicv':'ИИ &amp; Компьютерное зрение',
        'aib':'Технология ED на основе ИИ для вступительных экзаменов и прокторинга',
        'cvml':'Компьютерное зрение & amp; Машинное обучение',
        'aip':'Платформа AI для выявления нарушений правил на пешеходных переходах',
        'va':'Виртуальный помощник',
        'srb':'Автономный виртуальный помощник на основе распознавания речи',
        'mc':'Захват движения',
        'imc':'AR-контроллер захвата инерционного движения',
        'part':'Партнеры',
        // 'addr':'<span class="span">Адрес: </span>Ул. Зиёлилар, 9, район М.Улугбек, город Ташкент, 100170',
        // 'phone_t':'Телефон: ',
        // 'email':'Эл. адрес: ',
    }
}

var lang_ = "Eng"
$(document).on('click', '.dropdown-item', function(e){
    lang_ = $(this).text()
    // lang = $('#dropdown09').text()
    // $('#dropdown09').text($(this).text())
    // $(this).text(lang)
    $(this).text($('#dropdown09').text())
    $('#dropdown09').text(lang_)

    if(lang_ === 'Eng'){
        location.reload();
    }else{
        $("a, h2, p, h3, li, span").each(function(index, element){

            var attr = $(this).attr('data-key');
            var parser = new DOMParser;
    
            // attribute exists?
            if(attr !== undefined && attr !== false) {
                // alert($(this).attr('data-key'))
                // alert(arrLang[lang_][$(this).attr('data-key')])
                // var dom = parser.parseFromString(
                //     '<!doctype html><body>' + arrLang[lang_][$(this).attr('data-key')],
                //     'text/html');
                var dom = parser.parseFromString(arrLang[lang_][$(this).attr('data-key')], 'text/html')
                $(this).text(dom.body.textContent)    
            }
            
        });
    }
    //h2 p h3 li

  });
