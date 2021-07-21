import React from 'react'

export default function Home() {
    return (
        <div>
            <br />            
            <div className="row">
            <div className="col-5">
            <div className="card" >
                        <div className="card-body">
                            <h4 className="card-title" >Latest News</h4>
                            <br />
                            <h6 className="card-subtitle mb-2">Important Dates</h6>
                            <p className="card-text">

                                <div className="list-group" style={{fontSize:"13px"}}>
                                    <a href="#" className="list-group-item list-group-item-action">The last date for full length submission 25.09.21 </a>
                                    <a href="#" className="list-group-item list-group-item-action">Notification of acceptance 30.10.21 </a>
                                    <a href="#" className="list-group-item list-group-item-action">Registration of accepted papers without late fees 10.11.21 </a>
                                    <a href="#" className="list-group-item list-group-item-action">Convention dates 27.11.21 and 28.11.21 </a>

                                </div>
                            </p>
                            <h6 className="card-subtitle mb-2 " style={{display:"inline"}} >Paper Submission               </h6>
                            <a href="https://easychair.org/conferences/?conf=ncefes2021" className="card-link" >Link</a>

                        </div>
                    </div>
                </div>
                <div className="col-7">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" >
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                
                
            </div>
            <br />
            <div className="row">
                <div className='col-6'>
                    
                </div>
                <div className="col-6">
                    <div className="card" >
                        <div className="card-body">
                            <h3 className="card-title" >KeyNote Speakers</h3>
                            <br />
                            <p className="card-text">
                                TBA
                            </p>
                        </div>
                    </div>
                </div>
                


            </div>
            
        </div>
    )
}
