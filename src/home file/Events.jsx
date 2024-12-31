
import { CiClock2 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

const Events = () => {


    return (
        <div className=" event-div ">


            <div>


            <div className=" event-flex ">
            <div>
            <p className=" event-text ">Events</p>
            <p>Upcoming Education Events to feed your brain.</p>
            </div>  
            <div>
            <button className=" btn bg-blue-800 view-text text-white ">View More</button>
            </div>  
            </div> 
            <div className=" mt-10 ">
            <hr></hr>
            </div>  


            <div className=" apply-div ">
                 
             
              <div className=" app-1-flex ">

              <div className=" num-flex ">
               <div>
               <p className=" number-text ">30</p>  
               <p className=" sep-text ">SEP</p>
               </div>
               <p className=" bg-gray-300 h-[100px] w-[1px] "></p>
              </div>  
              <div>
               <p>Applying Natural Laws to Technology and Society</p>
               <div className=" mt-5 icon-flex ">
                <div className=" flex items-center gap-2">
                <p><CiClock2 className=" h-[25px] w-[25px] "></CiClock2></p>
                <p> 8:00 am - 5:00 pm</p>
                </div>
                <div className=" flex items-center gap-2">
                <p><CiLocationOn className=" h-[25px] w-[25px] "></CiLocationOn></p>
                <p>NewYork, USA</p>
                </div>
               </div>
               <p className=" mt-2 ">Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt<br></br> auctor a ornare odio. Sed non mauris itae erat conuat</p>
              </div>
              <div>
                <img className=" h-[200px] w-[300px] " src="https://shannonkamal.com/wp-content/uploads/2018/01/education-1959551_640.jpg"  alt="" />
              </div>
              </div>
             
              <div className=" mt-5 mb-5 ">
                <hr></hr>
              </div>
   
              <div className=" mt-10 app-1-flex ">

              <div className=" num-flex ">
               <div>
               <p className=" number-text ">25</p>  
               <p className=" sep-text ">SEP</p>
               </div>
               <p className=" bg-gray-300 h-[100px] w-[1px] "></p>
              </div>  
              <div>
               <p>Managing Time for Study</p>
               <div className=" mt-5 icon-flex ">
                <div className=" flex items-center gap-2">
                <p><CiClock2 className=" h-[25px] w-[25px] "></CiClock2></p>
                <p> 8:00 am - 5:00 pm</p>
                </div>
                <div className=" flex items-center gap-2">
                <p><CiLocationOn className=" h-[25px] w-[25px] "></CiLocationOn></p>
                <p>NewYork, USA</p>
                </div>
               </div>
               <p className=" mt-2 ">Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt<br></br> auctor a ornare odio. Sed non mauris itae erat conuat</p>
              </div>
              <div>
                <img className=" h-[200px] w-[300px] " src="https://eduma.thimpress.com/demo-main/wp-content/uploads/sites/95/2015/11/event-2-450x233.jpg"  alt="" />
              </div>

            </div>
            </div>            
 







            </div>
            
        </div>
    );
};

export default Events;