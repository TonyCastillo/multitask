import React, { PureComponent } from 'react'
import './TaskComponent.scss'

class TaskComponent extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <>
                <div className="task-list-content position-relative d-md-flex mb-5">
                    <div className="feature">
                        <div className="task-feature d-flex justify-content-center align-items-center"><span>R</span><span>B</span></div>
                    </div>
                    <div className="content pt-3 mb-2">
                        <h2 className="title_list">Recuperar base de datos</h2>
                        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos pariatur magnam sunt molestias qui optio?</p>
                    </div>
                    <div className="tags d-flex wrap align-items-center">
                        <span className="tag mr-2"><a href="">Html</a></span><span className="tag mr-2"><a href="">Java Script</a></span><span className="tag mr-2"><a href="">Sass</a></span>
                    </div>
                </div>
            </>
        )
    }
}

export default TaskComponent