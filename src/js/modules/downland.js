export default class Downland {
    constructor(triggers) {
        this.btns = document.querySelectorAll(triggers);
        this.path = '/assets/img/mainbg.jpg';
    }


    downlandItem(path) {
        const element = document.createElement('a');

        element.setAttribute('href', path);
        element.setAttribute('download', 'nice_picture');

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

    init() {
        this.btns.forEach(item => {
            item.addEventListener('click', () => {
                this.downlandItem(this.path);
            });
        });
    }
}