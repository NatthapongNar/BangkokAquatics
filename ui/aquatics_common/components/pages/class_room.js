import React, { Component } from 'react'
import img_our_class from '../../../../images/our_class.png'

import styles from '../styles/style.scss'
import bgImg from '../styles/component/images.scss'

class ClassRoom extends Component {
    
    render() {
        return (
            <div className={styles['aquatic_content']}>
                <div className={styles['our_brand']}>
                    <img src={img_our_class} />
                    <div className={styles['overlay']}>
                        <div className={styles['text']}>Our Classes</div>
                    </div>
                </div>
                <section className={`${styles['our_wrapper']} ${styles['first']}`}>
                    <div className="container">
                        <h2>Lea<span className={bgImg['style1']}>rn to Swim</span></h2>
                        <ul>
                            <li>Suitable for children from around the ages of 4-11 years-old.</li>
                            <li>Focused on teaching the FUNdamentals.</li>
                            <li>Here your child will learn water safety and become confident in a pool whilst supervised by an instructor. Lesson will be conducted with play in mind.</li>
                            <li>It is advised to attend 2 sessions per week while in the Learn to Swim class.</li>
                        </ul>
                    </div>
                </section>
                <section className={styles['our_wrapper']}>
                    <div className="container">
                        <h2>Sw<span className={bgImg['style2']}>im Fit</span></h2>
                        <ul>
                            <li>Upper school swimming fitness squad assists swimmers to develop technique and maintain general fitness levelsg.</li>
                            <li>Opportunities for competition can be made available at club level.</li>
                            <li className={styles['unsymblo']}>
                                <p>The following are the minimum requirements for the Swim Fit group:</p>
                                <p><span className={styles['pre_title']}>1. Swimming Standard Test:</span> Swimmers must be able to swim continuously for 400 m.</p>
                                <p><span className={styles['pre_title']}>2. Swimming Meet:</span> Swimmers are welcome to attend all internal meets.</p>
                                <p><span className={styles['pre_title']}>3. Training Commitment:</span> No attendance Requirements</p>
                            </li>
                        </ul>
                       
                    </div>
                </section>
                <section className={styles['our_wrapper']}>
                    <div className="container">
                        <h2>Clu<span className={bgImg['style3']}>b Junior</span></h2>
                        <ul>
                            <li>The Club Junior Squad assists swimmers to develop all aspects of stroke technique, fitness level and race skill to prepare for competitions.</li>
                            <li>This squad can be for swimmers who do not want to commit fully to training or competition and also for swimmers who have developed their swimming late.</li>
                            <li>This squad is in place to cater for swimmers who have other extra curricular interests. Whilst regular attendance at competitions is not compulsory for Club Junior, we do encourage swimmers to enter some competitions throughout the year to ensure motivation and fun.</li>
                            <li className={styles['unsymblo']}>
                                <p>The following are the minimum requirements for the Club Junior:</p>
                                <h6 className={styles['title']}>1.&nbsp;&nbsp;Swimming Standard Test:</h6>
                                <p className={styles['text']}>
                                    200 m non-stop swimming<br />
                                    · 50 m freestyle**<br />
                                    · 50 m backstroke**<br />
                                    · 25 m breaststroke**<br />
                                    · 25 m butterfly kick without a kick board<br />
                                    · Proper starts in both freestyle and backstroke<br />
                                    · Tumble turns 
                                </p>
                            </li>
                            <li className={styles['unsymblo']}>
                                <h6 className={styles['title']}>2.&nbsp;&nbsp;Swimming  Meets:</h6>
                                <p className={styles['text']}>
                                    Swimmers are expected to attend all internal meets as well as city wide developmental meets.<br />
                                    Swimmers may also attend the selected club meets upon approval from their coaches.
                                </p>
                            </li>
                            <li className={styles['unsymblo']}>
                                <h6 className={styles['title']}>3.&nbsp;&nbsp;Training Commitment:</h6>
                                <p className={styles['text']}>No attendance Requirements.</p>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className={styles['our_wrapper']}>
                    <div className="container">
                        <h2>Clu<span className={bgImg['style4']}>b Senior</span></h2>
                        <ul>
                            <li>The aim of Club Senior Squad is to enhance the basic training skills learnt in previous squads and to ensure that each swimmer learns correct technique on stroke start, and turns.</li>
                            <li>A bigger focus is made from swimming fitness, making it a more challenging but fun environment.</li>
                            <li>Swimmers will be encouraged to enter the local swimming competitions for experience and overseas competitions will also be encouraged.</li>
                            <li>This squad is in place to cater for swimmers who have other extra curricular interests and are currently unable to meet the demands of higher level squads.</li>
                            <li className={styles['unsymblo']}>
                                <p>The following are the minimum requirements for the Club Senior:</p>
                                <h6 className={styles['title']}>1.&nbsp;&nbsp;Swimming Standard Test:</h6>
                                <p className={styles['text']}>
                                    · 300 m non-stop swimming<br />
                                    · 100 m freestyle **<br />
                                    · 100 m backstroke**<br />
                                    · 50 m breaststroke**<br />
                                    · 25 m butterfly<br />
                                    · 100 m IM<br />
                                    · Proper starts in all strokes<br />
                                    · Proper turns in all strokes and IM  
                                </p>
                            </li>
                            <li className={styles['unsymblo']}>
                                <h6 className={styles['title']}>2.&nbsp;&nbsp;Swimming Meet:</h6>
                                <p className={styles['text']}>Swimmers are expected to attend swim meets held in Bangkok (both home and away).</p>
                            </li>
                            <li className={styles['unsymblo']}>
                                <h6 className={styles['title']}>3.&nbsp;&nbsp;Training Commitment:</h6>
                                <p className={styles['text']}>No attendance Requirements.</p>
                            </li>
                        </ul>
                    </div>
                </section>

                <div className="container">
                    <article>
                        <header>
                            <h2 className={styles['bold']}>Competitive Pathway</h2>
                            <p>
                                <span className={styles['note']}>Note:</span> Below are classes that we designed for higher skilled swimmers. We only provide basic classes displayed in the class schedule<br/>
                                (<a href="#">CLICK HERE</a> to see our current class schedule).
                            </p>
                            <p>For students who need to apply for higher performance training, please attend the assessment class or contact us directly to inform us of your expectations. Our coaches will help prepare your personal swimming schedule and learning.</p>
                        </header>
                        <ul id={styles['tabs']} className="nav nav-tabs">
                            <li className="nav-item">
                                <a href="" data-target="#DiscoverySquad" data-toggle="tab" className={`${styles['item']} nav-link small active`}>Discovery Squad</a>
                            </li>
                            <li className="nav-item">
                                <a href="" data-target="#ImaginationSquand" data-toggle="tab" className={`${styles['item']} nav-link small`}>Imagination Squad</a>
                            </li>
                            <li className="nav-item">
                                <a href="" data-target="#ChallengeSquad" data-toggle="tab" className={`${styles['item']} nav-link small`}>Challenge Squad</a>
                            </li>
                            <li className="nav-item">
                                <a href="" data-target="#PodiumSquad" data-toggle="tab" className={`${styles['item']} nav-link small`}>Podium Squad</a>
                            </li>
                        </ul>
                        <div id={styles['tabsContent']} className="tab-content">
                            <div id="DiscoverySquad" className={`${styles['body']} tab-pane fade active show`}>
                                <article>
                                    <h1 className="d-none">Discovery Squad</h1>
                                    <p>The following are the general aspects of focus for the <b>Discovery Squad:</b></p>
                                    <p><b>Mental development:</b> Swimmers will learn to enjoy the water and belonging to a group. A third of their athletic development should take place out of the water. Other activities such as gymnastics and other athletic exercises with catching and reaction games, and simple ball games. The other 2/3 should be in the water learning the swimming strokes. Additionally they will work on underwater swimming and will spend time playing.</p>
                                    <p><b>Commitment:</b> In this group swimmers may start off with 2 sessions per week and then advance to three or four as they progress.</p>
                                    <p><b>Skill Development:</b> All swimmers will learn each of the four competitive strokes, underwater swimming, diving, grab and track starts, flip turns, general endurance, flexibility, and agility. Swimming technique will be expanded as swimmers progress from Discovery 2 to Discovery 3. Relay exchanges, relay races, team races, and improvement of endurance will also be a focus.</p>
                                    <p><b>Skill Goals:</b> 200 free with flip turns; 200 Back with flip turns; 200 breast with pull outs; 100 fly with legal turns; 100 I’m with legal turns. Competition race start, correct finishes.</p>
                                    <p><b>Dryland:</b> Ball games, both in and out of the water; games with partners and groups; and tempo practice are introduced. This is designed to develop overall athletic skills.</p>
                                    <section>
                                        <h6 className={styles['title']}>DISCOVERY 1 SQUAD:</h6>
                                        <p>The following are the minimum requirements for the Discovery 1 group:<br/>Training Criteria:</p>
                                        <section>
                                            <h6 className={styles['title']}>1.&nbsp;&nbsp;Swimming Standard Test:</h6>
                                            <p className={styles['text']}>
                                                · 100 m non-stop swimming<br />
                                                · 50 m freestyle**<br />
                                                · 25 m backstroke**<br />
                                                · 25 m breaststroke**<br />
                                                · 25 m butterfly kick without a kick board<br />
                                                · Proper starts in both freestyle and backstroke<br />
                                                · Tumble turns 
                                            </p>
                                            <h6 className={styles['title']}>2.&nbsp;&nbsp;Swimming Meet:</h6>
                                            <p className={styles['text']}> Swimmers are expected to attend all internal meets. </p>
                                            <h6 className={styles['title']}>3.&nbsp;&nbsp;Training Commitment:</h6>
                                            <p className={styles['text']}>2 x per week, 2 hours</p>
                                        </section>
                                    </section>
                                
                                    <section>
                                        <h6 className={styles['title']}>DISCOVERY 2 SQUAD:</h6>
                                        <p>The following are the minimum requirements for the Discovery 2 group:<br/>Training Criteria:</p>
                                        <section>
                                            <h6 className={styles['title']}>1.&nbsp;&nbsp;Swimming Standard Test:</h6>
                                            <p className={styles['text']}>
                                                · 150 m non-stop swimming<br />
                                                · 50 m freestyle**<br />
                                                · 50 m backstroke**<br />
                                                · 50 m breaststroke**<br />
                                                · 25 m butterfly<br />
                                                · Proper starts in both freestyle and backstroke<br />
                                                · Tumble turns 
                                            </p>
                                            <h6 className={styles['title']}>2.&nbsp;&nbsp;Swimming Meet:</h6>
                                            <p className={styles['text']}>Swimmers are expected to attend all internal meets as well as city wide developmental meets. Swimmers may also attend selected club meets upon approval from their coaches.</p>
                                            <h6 className={styles['title']}>3.&nbsp;&nbsp;Training commitment:</h6>
                                            <p className={styles['text']}>3 x per week, 4 hours</p>
                                        </section>
                                    </section>
                                    
                                    <section>
                                        <h6 className={styles['title']}>DISCOVERY 3 SQUAD:</h6>
                                        <p>The following are the minimum requirements for the Discovery 3 group:<br/>Training Criteria:</p>
                                        <section>
                                            <h6 className={styles['title']}>1.&nbsp;&nbsp;Swimming Standard Test:</h6>
                                            <p className={styles['text']}>
                                                · N x 50m Freestyle on 60<br />
                                                · 100m IM at 1:45<br />
                                                · Base 50m Kick<br />
                                                · 200 m non-stop swimming<br />
                                                · 100 m freestyle**<br />
                                                · 100 m backstroke**<br />
                                                · 100 m breaststroke**<br />
                                                · 50 m butterfly**<br />
                                                · Proper starts in both freestyle and backstroke<br />
                                                · Tumble turns 
                                            </p>
                                            <h6 className={styles['title']}>2.&nbsp;&nbsp;Swimming Meet:</h6>
                                            <p className={styles['text']}>Swimmers are expected to attend all internal meets as well as city wide developmental meets. Swimmers may also attend selected club meets upon approval from their coaches.</p>
                                            <h6 className={styles['title']}>3.&nbsp;&nbsp;Training commitment:</h6>
                                            <p className={styles['text']}>3 x per week, 4 hours</p>
                                        </section>
                                    </section>
                                </article>
                            </div>
                            <div id="ImaginationSquand" className={`${styles['body']} tab-pane fade`}>
                                <article>
                                    <h1 className="d-none">Imagination Squand</h1>
                                    <p>This group covers basic swimming endurance, swimming speed change, and tempo over a 2 year period. Swimming technique is expanded. These swimmers are expected to have learned all four racing strokes and now aimed at increasing both technical work and training.</p>
                                    <p><b>Mental development:</b> Behavior in relation to the team and readiness to perform in a group setting. Discipline related to the sport of swimming. Knowledge of warm-up and warm-down and pre-race behavior. Behavior at a swim meet. Responsibility towards teammates.</p>
                                    <p><b>Commitment:</b> As the swimmers progress they should be in the water consistently 4 to 5 times per week.</p>
                                    <p><b>Skill Development:</b> Relay pickups and exchanges, ball games, relay races, team races, and improvement of endurance.</p>
                                    <p><b>Skill Goals:</b> Correct relay pickups, correct competition starts, finishes, how to train using a pace clock, rules of sport. The primary focus for kids at this age is the 200 IM which will develop overall swimming ability.</p>
                                    <p>The following are the minimum requirements for the Imagination group:<br/>Training Criteria:</p>
                                    
                                    <section>
                                        <h6 className={styles['title']}>1.&nbsp;&nbsp;Swimming Standard Test:</h6>
                                        <p className={styles['text']}>
                                            N x 50m Freestyle on 45<br />
                                            N x 100m Freestyle on 1:45<br />
                                            200 m IM at 3:00<br />
                                            Base 100m kick average &lt; 2:00 (100, 200, 300, 400m)
                                        </p>
                                    </section>

                                    <section>
                                        <h6 className={styles['title']}>2.&nbsp;&nbsp;Swimming Meet:</h6>
                                        <p className={styles['text']}>Swimmers are expected to attend swim meets held in Bangkok (both home and away). Swimmers in this squad are usually around 10-13 years old.</p>
                                    </section>

                                    <section>
                                        <h6 className={styles['title']}>3.&nbsp;&nbsp;Training commitment:</h6>
                                        <p className={styles['text']}>Minimum 4 x plus 2 gym sessions/week, 7.5 hours, recommended 5 x plus 2 gym Sessions / week, Maximum 5 x plus 2 gym sessions / week.</p>
                                    </section>
                                </article>
                            </div>
                            <div id="ChallengeSquad" className={`${styles['body']} tab-pane fade`}>
                                <article>
                                    <h1 className="d-none">Challenge Squad</h1>
                                    <p>In the <b>Challenge</b> training group swimmers are preparing to race at higher level meets. This is the group where the training commitment becomes greatly expanded. The overall workload and expectations increases substantially. Swimmers are exposed to more practice hours, distance swimming, and higher levels of competition.</p>
                                    <p><b>Mental development:</b> Knowledge of technique for all four strokes. Knowledge of planning and training and competition schedule. Self-monitoring and keeping record (i.e., log books, weight, heart rate, sleep, and training performance. Willingness to perform as an individual and for the team.</p>
                                    <p><b>Commitment:</b> Swimmers will be required to attend the age appropriate amount of practices per week. The 12 year olds in the group should attend 5 practices most of the year and over the summer they may add a double practice 1 to 2 times per week, but not more than 7 practices a week. 13 year olds should attend 6 practices over the term can go to as high as nine practices per week. The 14 year olds can also go to as many as 8 or 9 practices per week.</p>
                                    <p><b>Skill Development:</b> Stroke drill progressions are expanded as the coach can add new drills from the drill book for his kids.</p>
                                    <p><b>Skill Goals:</b> Some of these swimmers will begin to focus on best events. However, the main focus will be the 400 IM which again works to develop overall swimming ability.</p>
                                    <p><b>Dryland:</b> Core bodywork, stretching, stretching, med balls and circuit training.</p>
                                    <p>The following are the minimum requirements for the Challenge group:<br/>Training Criteria:</p>
                                   
                                    <section>
                                        <h6 className={styles['title']}>1.&nbsp;&nbsp;Swimming Standard Test:</h6>
                                        <p className={styles['text']}>
                                            N x 100m Freestyle on 1:30<br/>
                                            200m Freestyle at 2:30<br/>
                                            400 m freestyle at 5:10<br/>
                                            200 m IM at 2:45<br/>
                                            Base 100m kick average &lt;1:40 (100, 200, 300, 400m)
                                        </p>
                                    </section>
                    
                                    <section>
                                        <h6 className={styles['title']}>2.&nbsp;&nbsp;Swimming Meet:</h6>
                                        <p className={styles['text']}>Swimmers are expected to attend all swim meets held in Bangkok (both home and away). Swimmers will be in Secondary.</p>
                                    </section>

                                    <section>
                                        <h6 className={styles['title']}>3.&nbsp;&nbsp;Swimming Meet:</h6>
                                        <p className={styles['text']}>Minimum 5 sessions plus 2 gym sessions/week, 11.5 - 12.5 hours, recommended 7 x plus  2  gym-sessions week, maximum 8 swim plus 2 gym sessions/week.</p>
                                    </section>
                                </article>
                            </div>
                            <div id="PodiumSquad" className={`${styles['body']} tab-pane fade`}>
                                <article>
                                    <h1 className="d-none">Podium Squad</h1>
                                    <p>As swimmers enter this group, training will become increasingly specialized. They will begin to train in their primary strokes several times a week. They will be tested to develop paces for their specific level of training. This will allow grouping with others who share the same paces to provide a competitive training atmosphere. In general, there will be a distance group, a middle distance group, and lanes designated to specific strokes.</p>
                                    <p><b>Mental development:</b> Knowledge of special training methods, behavior before races. self-monitoring and team building.</p>
                                    <p><b>Commitment:</b> If participating in a national meet 100 % practice attendance is required during term time 6 times a week. 8 to 10 times per week for double practices during breaks and summer.</p>
                                    <p><b>Skill Development:</b> Swimming with endurance, maximum strength, muscular endurance specific to race, varies paces, basic swimming endurance, hypoxic breathing, distance specialization.</p>
                                    <p><b>Skill Goals:</b> Legal in all four strokes and turns. Must know all IM turns. Must know relay pickups. Aerobic training; Anaerobic training; High performance endurance training; Speed work; Negative split work; Resistance work (i.e. chutes); Hypoxic training, basic swimming speed, specific muscular endurance, basic swimming endurance, beginning of specialization; varied paces over longer distances.</p>
                                    <p><b>Dryland:</b> 3 times per week. Circuit training, medicine ball, core body. Introduction to weight training if available.</p>
                                    <p>The following are the minimum requirements for the Podium group:<br/>Training Criteria:</p>
                                    
                                    <section>
                                        <h6 className={styles['title']}>1.&nbsp;&nbsp;Swimming Standard Test:</h6>
                                        <p className={styles['text']}>
                                            N x 100m Freestyle on 1:15<br/>
                                            400 m freestyle at &lt; 5:00<br/>
                                            200 m IM at 2:30<br/>
                                            Base 100m Kick average &lt; 1:30 (100, 200, 300, 400m)
                                        </p>
                                    </section>

                                    <section>
                                        <h6 className={styles['title']}>2.&nbsp;&nbsp;Swimming Meet:</h6>
                                        <p className={styles['text']}>Swimmers are expected to attend all meets.</p>
                                    </section>

                                    <section>
                                        <h6 className={styles['title']}>3.&nbsp;&nbsp;Training commitment:</h6>
                                        <p className={styles['text']}>Minimum 7 x plus 2 gym sessions/week, 12.5 - 14.5 hours, recommended 8 x plus 2 gym  Sessions / week, maximum 9 swim plus 2 gym sessions/week. The Podium Team: Available only for elite level athletes. This program is by invitation only from the elite team coaches and is only for secondary or older swimmers.</p>
                                    </section>
                                </article>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        )
    }

}

export default ClassRoom