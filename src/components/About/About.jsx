const About = () => {
  return (
    <>
      
      <div className="flex items-start gap-8 p-8 ">
        <div className=' mt-8 flex flex-col gap-8'>
          <h1 className="text-3xl font-semibold">Frequently <span className="text-yellow-500">asked</span> questions</h1>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" checked="checked" />
            <div className="collapse-title text-xl font-medium">
            What are your hours of operation?
            </div>
            <div className="collapse-content">
              <p>We are open from 11:00 AM to 10:00 PM every day of the week.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
            Do you offer vegetarian or vegan options?
            </div>
            <div className="collapse-content">
              <p>Yes, we have a wide selection of mouthwatering vegetarian and vegan dishes available on our menu. From flavorful plant-based burgers to delectable vegan pasta, we cater to diverse dietary preferences.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
            Do you accept reservations?
            </div>
            <div className="collapse-content">
              <p>Absolutely! You can make a reservation by calling our reservation line at (123) 456-7890 or by visiting our website at www.demo-restaurant.com/reservations. We highly recommend making a reservation, especially during busy hours, to guarantee you have a table ready when you arrive.</p>
            </div>
          </div>
        </div>
        <div className="w-full">
        <h1 className="text-center text-4xl font-semibold mb-4">About <span className="text-yellow-500">Us</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sint beatae voluptas atque sapiente, perferendis quo labore blanditiis perspiciatis impedit iure voluptatum harum corporis obcaecati provident possimus quis molestias. At velit nobis eos assumenda et, vel vitae asperiores aperiam deleniti eaque? Ipsum distinctio quia pariatur repellendus tempore animi ut neque veniam, provident, facere corporis, ipsam voluptate inventore nam in fugiat esse id reprehenderit voluptas iste cumque expedita! Optio ullam omnis praesentium iste dolor possimus enim voluptas molestiae. Maxime odit, architecto esse, nihil incidunt tempore culpa quaerat illo repudiandae enim obcaecati eaque sapiente! Tempore fugiat rem distinctio repellat vero nesciunt facilis labore sunt ex commodi a quaerat doloremque delectus iusto eaque impedit nemo temporibus, optio, enim ipsa excepturi facere, cupiditate ad! Repudiandae, temporibus quaerat. Cumque nostrum nesciunt ad ipsum quos qui commodi mollitia, exercitationem itaque quidem labore ipsam eligendi natus sapiente, quibusdam id doloribus reprehenderit accusantium inventore perspiciatis provident placeat, vero voluptatibus? At consequuntur facilis reiciendis error harum vitae beatae voluptatibus quo deserunt tempora sunt quasi dolores repudiandae dicta, veniam suscipit dolorum asperiores aut quos? Ipsa ea molestiae iusto odio, deserunt blanditiis delectus culpa illo dolorem rem ducimus expedita unde quos alias voluptatum recusandae assumenda rerum omnis quo reprehenderit harum nihil!</p>
        </div>
      </div>
    </>
  );
};

export default About;
