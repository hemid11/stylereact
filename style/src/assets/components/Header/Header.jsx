import React from 'react';

const Header = () => {
    return (
        <div className='container'>
             <div className='section' style={{backgroundImage: `url('https://assets.nicepagecdn.com/d2cc3eaa/2625193/images/young-rural-travellers-picnic2.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center',height:'750px'}}>
            <div className="card" style={{ backgroundColor: 'white', width: "24rem"}}>
                <div style={{fontSize:'30px',}} className="card-body">
                    <h5 className="card-title">Find yourself outside at a cozy Camp this month.</h5>
                    <p className="card-text">Habitant morbi tristique senectus et. Nec dui nunc mattis enim ut tellus. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam.</p>
                    <a href="#" className="btn btn-primary">Learn More</a>
                </div>
            </div>
        </div>
        </div>
       
    );
};

export default Header;
