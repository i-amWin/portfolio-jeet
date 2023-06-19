import Input from "@/components/Input";

export default function Contact() {
  return (
    <div className="text-white">
      <div className="max-w-screen-lg w-full mx-auto px-4 py-14">
        <h2
          className="
            relative mb-6 pb-2
            text-2xl md:text-3xl lg:text-4xl font-bold
            after:absolute after:-bottom-px after:-left-[calc((100vw-100%)/2)]
            after:w-screen after:h-[.125rem] after:bg-[#151529]        
          "
        >
          Contact Me
        </h2>

        <div>
          <form
            action="https://getform.io/f/5047f652-95b9-4c27-9b71-84cc7e570dac"
            method="POST"
            className="flex flex-col gap-4 max-w-screen-sm px-4"
          >
            <Input name="name" labelText="Your Name" />
            <Input name="email" labelText="Your Email" />

            <div className="flex flex-col relative">
              <textarea
                className="
                  px-4 pb-2 pt-6 rounded-md
                bg-accent bg-opacity-30
                  focus:outline-none peer
                  appearance-none resize-none
                "
                name="message"
                id="textarea"
                placeholder=" "
                rows={5}
              ></textarea>
              <label
                className="
                  absolute top-1 left-4
                  scale-[85%] origin-left
                  peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:scale-100
                  peer-focus:scale-[85%] peer-focus:translate-y-0
                  transition-transform duration-150 
                "
                htmlFor="textarea"
              >
                Your Message
              </label>
            </div>

            <button
              className="w-fit px-5 py-2.5 bg-primary-button  rounded-md"
              type="submit"
            >
              Submit Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
