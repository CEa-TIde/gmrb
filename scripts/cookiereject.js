

class Docker {

    dockerEl;
    docker;
    origParent;

    constructor() {
        this.docker = this.createDocker(200, 200);
    }

    createDocker(width, height) {
        let docker = document.querySelector("._cookie-docker");
        if (!docker) {
            docker = document.createElement("div");
            docker.style = `box-sizing:border-box;z-index:100;border:2px solid red;position:fixed;top:300px;right:50px;width:${width}px;height:${height}px;`;
            docker.width = width;
            docker.height = height;
            docker.classList.add("_cookie-docker");
            let div = document.createElement("div");
            div.style = "width:50%;height:50%;background:green;";
            docker.appendChild(div);
            document.body.appendChild(docker);
        }
        return docker;
    }

    get isDocked() { 
        return this.dockerEl == null;
    }

    moveTo(el) {
        this.dockerEl = el;
        this.origParent = el.parentElement;
        this.docker.contentWindow.document.body.appendChild(this.dockerEl);
    }

    moveBack() {
        this.origParent.appendChild(this.dockerEl);
        this.dockerEl = null;
    }
}

gmrb = {
    docker: undefined,
    findCookieWindow: _ => {

    },
    
    setupDocker: _ => {
        console.log("Setting up docker...");
        this.docker = new Docker();
    },
    
    uncheckBoxes: _ => {

    },
    
    abort: _ => {

    },
};

gmrb.setupDocker();

