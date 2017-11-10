var Doc = React.createClass ({
    render: function () {
        return (
            <div>
                 <p id="p">{this.props.p1}</p>
                 <p id="p">{this.props.p2}</p>
                 <p id="p">{this.props.p3}</p>
                 <p id="p">{this.props.p4}</p>
                 <h1 className="title">И так, как это сделать?</h1>
                 <p id="p">{this.props.p5}</p>
                 <p id="p">{this.props.p6}</p>
                 <h1 className="title">{this.props.email}</h1>
                 <p id="p">{this.props.p7}</p>
                 <p id="p">{this.props.p8}</p>
                 <p id="p">{this.props.p9}</p>
                 <p id="p">{this.props.p10}</p>
                 <p id="p">{this.props.p11}</p>
                 <h1 className="title">{this.props.p12}</h1>
                 <p id="p">{this.props.p13}</p>
                 <p id="p">{this.props.p14}</p>
                 <p id="p">{this.props.p15}</p>
                 <p id="p">{this.props.p16}</p>
                 <p id="p">{this.props.p17}</p>
                 <p id="p">{this.props.p18}</p>
                 <p id="p">{this.props.p19}</p>
                 <h1 className="title">{this.props.p20}</h1>
            </div>
        );
    }
});

const app = document.getElementById("root2");

ReactDOM.render (
<div>
<div className="hero-body">
<div className="container has-text-centered">
<section className="hero is-primary is-medium">
<div className="hero-body">
<div className="container">
<Doc 
p1="Здраствуйте! Это документация как выложить приложения в нашем store."
p2="Это можно сделать обсолютно бесплатно :) и без какой любо регистрации!"
p3="Сразу скажем что скачка и запуск ваших приложений пользователями то же без регистрации."
p4="Наш сервис не нисет отвествености за ваши денежные потери."
p5="Все просто!"
p6="Нужно отправить на почту:"
email="webgamestore.reg.game@gmail.com"
p7="Название вашего приложения"
p8="Описание"
p9="Автор"
p10="Иконка приложения размером:(100x100),"
p11="Скриншоты приложения количество: 3, размером: (200x200),"
p12="(можно сами скриншоты и иконки или ссылки на них (рекамендовано ссылки!))."
p13="Закрепить файлы игры в зжатом состоянии."
p14="Если не получилось прекрепить файлы к письму можно их отправить другим способом,"
p15="предварительно сообщив в письме или отправить ссылку на файлы (файл)."
p16="Cсылку на запуск игры (не обязательно)"
p17="Cсылка на ваш сайт (если есть )"
p18="В течение суток ваша игра будет добавлена в store,"
p19="если она не соотвсествует требованиям, мы вам напишим о не соотвествии требовниям!"
p20="Спасибо за внимание, ждем ваших игр)"
/>
</div>
</div>
</section>
</div>
</div>

</div>,
app);