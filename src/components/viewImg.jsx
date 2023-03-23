import { ref, nextTick } from "vue";
export const MyViewImg = {
  props: {
    src: String,
    width: Number,
    height: Number,
  },
  setup(props) {
    const box = ref(null);
    const hidden = ref(false);
    const handleClick = e => {
      if (e.target === box.value) {
        hidden.value = false;
      }
    };
    return () => (
      <div
        className="flex justify-center py-2"
        onClick={e => {
          hidden.value = true;
        }}
      >
        <img
          className="cursor-pointer"
          src={props.src}
          alt=""
          style={{
            width: props.width + "px",
            height: props.height + "px",
            objectFit: "cover",
          }}
        />
        {hidden.value && (
          <div
            className="fixed top-[0px] left-[0] w-screen h-screen bg-[rgba(0,0,0,0.5)] overflow-y-scroll"
            onClick={e => {
              e.stopPropagation();
            }}
          >
            <div
              className="flex justify-center"
              ref={box}
              onClick={() => handleClick(event)}
            >
              <img
                className="cursor-pointer"
                src={props.src}
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        )}
      </div>
    );
  },
};
