import React from 'react'

export default function Home() {
    return (
        <div>
            <br />            
            <div className="row">
                <div className="col-9">
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
                <div className="col-3">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">About</h3>
                            <br />
                        </div>
                    </div>
                </div>
                
            </div>
            <br />
            <div className="row">
                <div className='col-6'>
                    <div className="card" >
                        <div className="card-body">
                            <h3 className="card-title" >Latest News</h3>
                            <br />
                            <h6 className="card-subtitle mb-2">Important Dates</h6>
                            <p className="card-text">

                                <div className="list-group">
                                    <a href="#" className="list-group-item list-group-item-action">Last date of Full-length Submission: August 25, 2021</a>
                                    <a href="#" className="list-group-item list-group-item-action">Notification of acceptance: September 30, 2021</a>
                                    <a href="#" className="list-group-item list-group-item-action">Conference Date: October 23-24, 2021</a>

                                </div>
                            </p>
                            <h6 className="card-subtitle mb-2 " >Paper Submission</h6>
                            <a href="#" className="card-link" >Link</a>

                        </div>
                    </div>
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
