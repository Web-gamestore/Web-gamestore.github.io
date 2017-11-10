

var Game = React.createClass ({
      
    render: function () {
        return (
            <div>
                <h1 className="title">{this.props.name}</h1>
                <p id="p">{this.props.ops}</p>
                <div id="autor-bg">
                <h1 id="autor">{this.props.autor}</h1>
                </div>
                <img id="img" src={this.props.usr}/>
                <br/>
                <img id="img-game" src={this.props.img1}/>
                <img id="img-game" src={this.props.img2}/>
                <img id="img-game" src={this.props.img3}/>
                <br/>
                <br/>
                <a id="a" onClick={this.onClick} href={this.props.dow} download className="button is-success">Скачать <i id="icon2" className="fa fa-download" aria-hidden="true"/></a>
                <a id="a" href={this.props.zap} className="button is-success">Запустить</a>
                <a id="a" href={this.props.site} className="button is-success">Сайт разроботчика</a>
                <br/>
                <br/>
                <br/>
                <br/>
                <a id="a" href="console-developer" className="button is-success" >Загрузить свое прилижения?</a>
            </div>
        );
    }
});


const app = document.getElementById("root");

ReactDOM.render (
    <div>
        <div className="hero-body">
        <div className="container has-text-centered">
        <section className="hero is-primary is-medium">
        <div className="hero-body">
        <div className="container">
        <Game 
        name="Web-game store" 
        ops="Store for web-game" 
        autor="Game.js" 
        usr="../icon/favicon.ico" 
        img1=""
        img2=""
        img3=""
        dow="null"
        zap="Web-gamestore.github.io"
        site="Web-gamestore.github.io"
        />
        </div>
        </div>
        </section>
        </div>
        </div>
        
       
    </div>,
app);
