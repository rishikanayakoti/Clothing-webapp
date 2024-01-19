import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'
import Navbar from './Navbar';

function Home() {

    return (
      <div id="whole">
        <Navbar></Navbar>
        <Carousel showThumbs={false} dynamicHeight={true} >
        <div>
          <img src="https://images.freekaamaal.com/store_desc_images/1516103172.jpg" />
          <p className="legend">offers1</p>
        </div>
        <div>
          <img src="https://images.smartpricedeal.com/cache/catalog/deals/2017/April/001/voonik1-500x500.jpg" />
          <p className="legend">offers2</p>
        </div>
        <div>
          <img src="https://www.baapoffers.com/uploads/amazon-upto-70-off-levis-lee-pepe-wrangler-clothings-offer-.jpg" />
          <p className="legend">offers3</p>
        </div>
      </Carousel>
      {/* <!-- row-1 --> */}
      <div className="container mt-4">
        <h4>Categories</h4>
        <div className="card-group">
          {/* <!-- card-1 --> */}
          <div className="card shadow-lg">
            <div className="card-body"><a href=""></a>
                <img id="cat1" src="https://cdn0.weddingwire.in/article/5894/3_2/960/jpg/64985-ethnic-wear-anita-dongre-cover.jpeg" className="w-100 h-100, img-fluid, border border-dark shadow-lg mb-4" alt=""/>
                <h6>ETHNIC WEAR</h6>
            </div>
          </div>
          {/* <!-- card-2 --> */}
          <div className="card  shadow-lg">
            <div className="card-body ">
              <img id="cat2" src="https://assets.vogue.in/photos/5ce42e424a30b3507e12d745/master/pass/Wedding-dresses-everything-you-already-didn%E2%80%99t-know-about-them.jpg" class="w-100 h-100, img-fluid, border border-dark shadow-lg mb-4" alt="" />
              <h6>WEDDING WEAR</h6>
            </div>
          </div>
          {/* <!-- card-3 --> */}
          <div className="card  shadow-lg">
            <div className="card-body">
              <img id="cat3" src="https://images.meesho.com/images/widgets/JQMMH/pmsbl_300.webp"alt=''></img>
                </div>
          </div>
          {/* card-4 */}
          <div className="card shadow-lg">
            <div className="card-body ">

              <img id="cat5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRgcKtRMXUBK_jwhZScFEZgKJ91zi17rYoUQ&usqp=CAU" className="w-100 h-100, img-fluid, border border-dark shadow-lg mb-4" alt="" />
              <h6>PARTY WEAR</h6>
            </div>
          </div>
          {/* card-5 */}
          <div className="card   shadow-lg">
            <div className="card-body">

              <img id="cat6" src="https://i.etsystatic.com/18229624/c/833/660/57/201/il/839e49/3401833841/il_340x270.3401833841_4v0o.jpg" className="w-100 h-100, img-fluid, border border-dark shadow-lg mb-4" alt="" />
              <h6>SLEEP WEAR</h6>
            </div>
          </div>
        </div>
      </div>
      {/* Row-2 */}
      <div className="container mt-4">
        
      <div className="card-group">
          {/* <!-- card-1 --> */}
          <div className="card shadow-lg">
            <div className="card-body">
                <img id="cat1" src="https://cdn0.weddingwire.in/article/5894/3_2/960/jpg/64985-ethnic-wear-anita-dongre-cover.jpeg" className="w-100 h-100, img-fluid, border border-dark shadow-lg mb-4" alt=""/>
                <h6>ETHNIC WEAR</h6>
            </div>
          </div>
          {/* <!-- card-2 --> */}
          <div className="card  shadow-lg">
            <div className="card-body ">
              <img id="cat2" src="https://assets.vogue.in/photos/5ce42e424a30b3507e12d745/master/pass/Wedding-dresses-everything-you-already-didn%E2%80%99t-know-about-them.jpg" class="w-100 h-100, img-fluid, border border-dark shadow-lg mb-4" alt="" />
              <h6>WEDDING WEAR</h6>
            </div>
          </div>
          {/* <!-- card-3 --> */}
          <div className="card  shadow-lg">
            <div className="card-body">
              <img id="cat3" src="https://images.meesho.com/images/widgets/JQMMH/pmsbl_300.webp"alt=''></img>
                </div>
          </div>
          {/* card-4 */}
          <div className="card shadow-lg">
            <div className="card-body ">

              <img id="cat5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRgcKtRMXUBK_jwhZScFEZgKJ91zi17rYoUQ&usqp=CAU" className="w-100 h-100, img-fluid, border border-dark shadow-lg mb-4" alt="" />
              <h6>PARTY WEAR</h6>
            </div>
          </div>
          {/* card-5 */}
          <div className="card   shadow-lg">
            <div className="card-body">

              <img id="cat6" src="https://i.etsystatic.com/18229624/c/833/660/57/201/il/839e49/3401833841/il_340x270.3401833841_4v0o.jpg" className="w-100 h-100, img-fluid, border border-dark shadow-lg mb-4" alt="" />
              <h6>SLEEP WEAR</h6>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      {/* <!-- Site footer --> */}
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">Lorem ipsum dolor sit amet. Et pariatur nihil id quisquam cupiditate qui amet nulla. Et dolores voluptates et illo natus aut autem eveniet et quis porro hic dolorem veniam. Eos dolorem ducimus quo perspiciatis earum et placeat nesciunt ea repellendus voluptas.</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li><a href="#">Men</a></li>
              <li><a href="#">Women</a></li>
              <li><a href="#">Kids</a></li>
              <li><a href="#">Gift cards</a></li>
              <li><a href="#">Offers</a></li>
              
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="">About Us</a></li>
              <li><a href="">Contact Us</a></li>
              <li><a href="">Contribute</a></li>
              <li><a href="">Privacy Policy</a></li>
              
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2022 All Rights Reserved by 
         <a href="#">Title</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
</footer>
    </div>
  )
}
export default Home