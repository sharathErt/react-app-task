import React from 'react';
import './FeaturedResources.css';

const FeaturedResources = () => {
    const resources = [
        { id: 1, imageUrl: 'https://s3-alpha-sig.figma.com/img/713b/31eb/5a5dd67e4b05ef51639609d7d472279d?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QGwI7~XFwk6HNaH8GiFksDhrEYA9YO4sG2AqPU7RvyjfHFtjMO-7LejcjfNJPRaJ-7Ew0rzQGpusXrVNgWxVhAYPHHh1HKk8Y4sR9BcvCHv6-funvtBHFdIuckOxl9LtBaDZwlcfHJlUbuH2PWIPDzOmc~qhOFnaMX~6Y-6ffrcRgQ8LVR0kNMhkpRAtwXoLiSCw4uXna2AbnFmqc9qxj22ErK2cgasKf580ijQfskQzR19FDTTRT2-mjChPeywyQ5xVAr2ZWPw5Xnl0qwbKwccSoypLi9EODlbqL77B5YQY-EJPbAKTxU3zCM299hRicuU1gS04wt01zDB9IU-fvQ__', title: 'How to Build a Scalable Application up to 1 Million Users on AWS' },
        { id: 2, imageUrl: 'https://s3-alpha-sig.figma.com/img/3ba1/674e/cc1fb863231774008e91cad17dc3acd3?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qyoYbXQaSeWaHVF5gVA3zsg9oT91fpPo5V8X8xBNFiNLgMzmMzheMuXnXrmNXlX6dewp5QXfAreRyeuQnEu1KvZKihgA~nfOUBj8qr0JYstpSST7YSkFWZ2Y-TlloCBmkgLC2kkWTMHrC1wjydn0swxisp0~~tT6r1ZfIukQyWKHfJSuw20Gk1crtwegnUUjfH19EELM2lsVpUs66h27eXqnoqjmYeSN0cq1p6oRFRrXcXQg6JUMTQi0RVv~lu4cq4Bphm5kg3Qq70cyK~nvix01N5NhWff9vVmWFcABUEXFg7lvRSwToJa5Xcl9nEXYV~20RGHStoTPyfh2PWH~Ag__', title: 'How to Build a Scalable Application up to 1 Million Users on AWS' },
        { id: 3, imageUrl: 'https://s3-alpha-sig.figma.com/img/1d66/37ff/b948ab8a209f71bc7cd62da7dbcedd3c?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o8bugNwJVqbn6cxo4YxBvfjplc0SPf1Jt8Wz0e4Q8-c4T0hTke5guYGemsG4AwWM1wZ2Fvu57UsBDSqv3UrfGbZwz9fp--Cfqoor-pVnINeBa5vt8k~CHjix7MA~8FIhW8iF1nQww~S36tLp9gF4oKHuSxpHU~FU7wtgov8F4YNqJAl0kEwYu-3oWPFAT10KPA4LiQMDwIIaffJLd8ZxeRVDTshQvqloAtXL3pL0ncBhnPCxW3mcnV0B46sfxIyF8xmSBl~EQzXoxDgXfSasPaJmWo~EKJiDViHIRLORpeWZQDBRcMGkJOLrHzoVmIm3LA5SIvats5ciM7D31WOBXA__', title: 'How to Build a Scalable Application up to 1 Million Users on AWS' },
        { id: 4, imageUrl: 'https://s3-alpha-sig.figma.com/img/21e9/2a52/a3eff9c8e7c41559b3fa7f3e126ff2dd?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iy7MV~M1AlYpUf58N-mAPk5LcUHtF~uWvuvTuynfm7SuWgOdLrWmPCRPaG6wNlgyJbx6I8GTeLB2t1J2jK6s5JB2ELOhvuyShdSg0KPmnmpipOdfXde4k0R9wmUJ75spYC~eCJqektcJY6CjdZND-dRguJ9LJYOdbvZeFNNkaubuO~M5FiLNaZ8N6PHLmaF37Damrx6P4RAYcVzFWOroAijvZ5DSPCbsPnQtjbMFbrY-08b~hD7bCQNl43YbgTSl9m2dee3jrJNSdg16GWsdc84qcfuMkoVOUUKAK6PjD7gxZSc3A2Qy1tekXxmcu11IFIPTS75BGv67fp36erVbRw__', title: 'How to Build a Scalable Application up to 1 Million Users on AWS' },
        { id: 5, imageUrl: 'https://s3-alpha-sig.figma.com/img/bcf8/708d/9005b4556468e436599216012851ac66?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Udl54m-Cg9RykyAeo0KMeerJdTeW-x564l6dAK46ea-dkSBkQ5AFkmwTFaNsnC1mYN53B94QRq-ozpxggobIfwZInqXSLournV0q8HxiMQNIHrKvl7DA3hiLcZVuFiCIYGlnCWXUiDj8jxv0BedkJI1ijlc8mDC6j~jg6PDKlmk7Pk6wSkOHxpxSeHDe2uW4gM6YbmDd9dvc0gRmP~MyzLaNi2eaUVm0fkzSTzO7HJxORc0rrIWWMXN~gKqCNGmRDPk3GIPSFk62NeTH1wvsGSiaT8m12q3rXwyZNfAKtOp0CKHvWLCqHFKsJmzC7LeQohz26PgYHWJp9Hh-1fIV9w__', title: 'How to Build a Scalable Application up to 1 Million Users on AWS' },
    ];

    return (
        <div className="featured-resources">
            <div className="line4"></div>
            <h2>Featured <br></br><span>Resources</span></h2>
            <div className="resources-container">
                {resources.map(resource => (
                    <div key={resource.id} className="resource-card">
                        <img src={resource.imageUrl} alt={resource.title} />
                        <h3>{resource.title}</h3>
                        <a href="#!" className="read-more">Read More <span>&rarr;</span></a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FeaturedResources;
