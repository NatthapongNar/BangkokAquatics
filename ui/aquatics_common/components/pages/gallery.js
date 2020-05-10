import React, { Component } from 'react'
import _ from 'lodash'
import styles from '../styles/style.scss'
import { imgList } from './config'

class Gallery extends Component {

    componentDidMount() {
        $(document).ready(function(){
            $(".fancybox").fancybox({
                openEffect: "elastic",
                closeEffect: 'elastic',
                minHeight: 300,
                helpers : {
                    title : {
                        type : 'inside'
                    }
                }
            })
            
            $(`.${styles['zoom']}`).hover((e) => { 
                $(e.target).addClass(styles['transition_scale']) 
            }, (e) => {          
                $(e.target).removeClass(styles['transition_scale'])
            })

        })      
    }

    render() {
        return (
            <div className={styles['aquatic_content']}>
                <div className="container">
                    <div className={styles['gallery_container']}>
                        <h4 className={styles['title']}>Gallery</h4>
                        <div className="row">
                            {
                                _.map(imgList, (data, index) => {
                                    return (
                                        <div 
                                            key={`gallery_${index+1}`} 
                                            className={`col-lg-3 col-md-4 col-xs-6  ${styles['thumb']}`}
                                        >
                                            <a href={data.src} 
                                                title={data.title} 
                                                className="fancybox" 
                                                rel="ligthbox"
                                            >
                                                <img  
                                                    src={data.src}
                                                    className={`${styles['zoom']} img-fluid `}
                                                    data-aos="fade-right"
                                                    data-aos-delay={100*index +1}
                                                    alt="" 
                                                />
                                            </a>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Gallery