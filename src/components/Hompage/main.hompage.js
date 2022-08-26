import './style.hompage.css'
import DisabledExample from '../Utilities/faketombol';

const Hompage = () => {
   return (
      <section class="min-vh-100 d-flex align-items-center py-lg-0 py-5 " id="about">
        <div class="container">
          <div class="row align-items-center">
            <div clas="col-lg-7 order-lg-1 order-2">
              <h1 clas="main-header">
                Welcome! I Am 
                <br/>
                <span class="text-primary">Syahrul Romadon</span>
                </h1>
                <p>
                Ini adalah sebuah websiite tugas pada saat 
                mengikuti course bang Dea Afrizal
                <br/>
                1. Routing URL POST dengan isian component dari API POST diatas (dengan data title saja)
                <br/>
                2. Modif UI HOMEPAGE
                <br/>
                3. Validasi Active Navigation Bar<br/>
                4. Ketika POST Title di klik, munculkan modal popup deskripsi detail dari api tersebut,
                <br/> 
                5. Kreatifitas
                </p>
                <DisabledExample/>
              </div>
            </div>
        </div>
        
      </section>
      
   );
   }

export default Hompage;