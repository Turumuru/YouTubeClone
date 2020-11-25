import React from "react";
import Home from "./components/Home";
import {Route, Switch} from 'react-router-dom';
import Player from './components/Player';
import NotFound from './components/NotFound';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            video: [
                {id: 1, title: "[MyGap] Почему регионы такие бедные", youtube_link: 'T2RmycjaH8Y',
                    description: "Вы знаете, куда уходят ваши налоги? Как, например, распределяется налог на доход физических лиц? Что происходит с налогом на прибыль? Почему НДС не остается в регионах? Понимая, природу распределения налогов, вы поймете ответы на многие вопросы.",
                    views: "390 375 просмотров",
                    release: "25 окт. 2020 г."},
                {id: 2, title: "КОНЕЧНАЯ! (DOOM ETERNAL DLC) #6", youtube_link: 'Ylf-7hNNdHs',
                    description: "https://www.twitch.tv/elwycco - СТРИМЫ ТУТ!\n" +
                        "https://vk.com/official_group_by_wycc220 - ГРУППА ВК",
                    views: "64 тыс.просмотров",
                    release: "1 неделю назад"},
                {id: 3, title: "\"Я-невротик?\" Проверь, есть ли у тебя невроз", youtube_link: 'okgPs7p-I44',
                    description: "В психоаналитической диагностике есть такая категория, как невротическая структура личности.\n" +
                        "Она подразумевает наличие чувства вины и страха отвержения, недостаточное выражение и осознавание злости, направление гнева на себя, из-за чего происходит невротическая депрессия.\n" +
                        "Также невротики страдают от заниженной самооценки, перфекционизма, неуверенности в себе, Стремления к идеалу себя, который они никогда не могут достичь.\n" +
                        "Их жизнь полна ограничениями, которые они устанавливают себе сами.\n" +
                        "О том, почему так происходит, и что с этим делать, вы узнаете из видео.",
                    views: "880 077 просмотров",
                    release: "13 февр. 2019 г."},
                {id: 4, title: "Void Bastards (БЭУС...?) #6", youtube_link: 'dV_IFO1LPoo',
                    description: "https://www.twitch.tv/elwycco - СТРИМЫ ТУТ!\n" +
                        "https://vk.com/official_group_by_wycc220 - ГРУППА ВК",
                    views: "72 тыс. просмотров",
                    release: "1 год назад"},
                {id: 5, title: "30 minutes of kirby music to make you feel better", youtube_link: 'fpcAvRw0Q-Y',
                    description: "Smile, think happy thoughts, eat candyfloss, and presto, you're Kirby!",
                    views: "1 109 443 просмотра",
                    release: "13 янв. 2020 г."},
                {id: 6, title: "Stand Up: Стас Старовойтов отпраздновал юбилей гуся", youtube_link: 'v3mc5WovA5o',
                    description: "Стас Старовойтов о странных корпоративах и невесёлой медийной жизни.",
                    views: "1 485 423 просмотра",
                    release: "28 окт. 2020 г."},
                {id: 7, title: "MMV - KEAN DYSSO - Plain Jane", youtube_link: '-wpTY3LM5bc',
                    description: "Hola friends!) So yeah, it's a crossover, I guess? I hope that you will like it.",
                    views: "1 456 571 просмотр",
                    release: "Дата премьеры: 23 окт. 2020 г."},
                {id: 8, title: "Коррупция Как Она Есть", youtube_link: 'N7kuQKwzz2I',
                    description: "Коррупция – это безусловно бич для экономики каждой страны. А ты можешь внятно объяснить, что это? Как это влияет лично на тебя? Слово настолько часто употребляется, что большинство четко то сформулировать не может его значение.",
                    views: "1,5 млн просмотров",
                    release: "2 года назад"},
                {id: 9, title: "Stand Up. Алексей Щербаков - Зачем нужно учить китайский", youtube_link: 'WBqyfOHNshE',
                    description: "",
                    views: "",
                    release: ""},
                {id: 10, title: "Вечная проблема России: КОПИТЬ ИЛИ ЖИТЬ? - ТОПЛЕС", youtube_link: '5g6cyyPjw_g',
                    description: "",
                    views: "",
                    release: ""},
            ]
        }
    }

    render() {
        return (
            <div>
                <main>
                    <Switch>
                        <Route exact path="/" component={Home}/>

                        <Route exact path="/video/:id"
                               render={(props) => <Player {...props} video={this.state.video}/>}/>

                        <Route exact path="*" component={NotFound}/>
                    </Switch>
                </main>
            </div>
        );
    }
}


export default App;