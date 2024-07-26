export function DialButton() {
  const selectors = document.querySelectorAll(".selector");

  selectors.forEach((selector) => {
    const knob = selector.querySelector(".knob");
    const ul = selector.querySelector("ul");
    const radios = selector.querySelectorAll('input[type="radio"]');

    function handleClick() {
      selector.classList.toggle("active");

      if (selector.classList.contains("active")) {
        selector.style.removeProperty("--angle");
      } else {
        selector.style.setProperty("--angle", "-90deg");

        // Check the first one on close
        radios.forEach((radio, index) => {
          if (index !== 0) {
            radio.checked = false;
          } else {
            radio.checked = true;
          }
        });
      }
    }


    knob.addEventListener("click", handleClick);
  });

  return (
    <>
      <div>
        <div className="selector">
          <div className="knob"></div>
          <ul>
            <li>
              <span>Back</span>
              <input type="radio" name="choice-a" checked />
            </li>
            <li>
              <span>Home</span>
              <input type="radio" name="choice-a" />
            </li>
            <li>
              <span>Search</span>
              <input type="radio" name="choice-a" />
            </li>
            <li>
              <span>Star</span>
              <input type="radio" name="choice-a" />
            </li>
            <li>
              <span>More</span>
              <input type="radio" name="choice-a" />
            </li>
            <li>
              <span>Refresh</span>
              <input type="radio" name="choice-a" />
            </li>
          </ul>
        </div>
      </div>

      <div data-theme="dark">
        <div className="selector">
          <div className="knob"></div>
          <ul>
            <li>
              <span>Back</span>
              <input type='radio' name='choice' checked />
            </li>
            <li>
              <span>Home</span>
              <input type='radio' name='choice' />
            </li>
            <li>
              <span>Search</span>
              <input type='radio' name='choice' />
            </li>
            <li>
              <span>Star</span>
              <input type='radio' name='choice' />
            </li>
            <li>
              <span>More</span>
              <input type='radio' name='choice' />
            </li>
            <li>
              <span>Refresh</span>
              <input type='radio' name='choice' />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}