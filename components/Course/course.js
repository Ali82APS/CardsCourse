const template = document.createElement('template')
template.innerHTML = `
    <link rel="stylesheet" href="components/Course/course.css">
    <div class="course-card">
            <div class="cover">
                <img src="" alt="♥️">
            </div>

            <div class="details">
                <h2></h2>
                <div class="info">
                    <p>Students: <slot name="Students"></slot></p>
                    <p>Teacher: <slot name="teacher"></slot></p>
                </div>

                <div class="actions">
                    <button id="register">Register</button>
                    <button id="toggle">Show Detsils</button>
                </div>

            </div>

        </div>
`

class Course extends HTMLElement {
    constructor () {
        super()

        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    connectedCallback () {
        this.shadowRoot.querySelector('.details h2').innerHTML = this.getAttribute('title')

        this.shadowRoot.querySelector('img').setAttribute('src', this.getAttribute('cover'))
    }

    static observedAttributes () {
        return ["title", "cover"]
    }
}

export { Course }