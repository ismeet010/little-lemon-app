
import Section from "./Section";
import {DATA} from "../assets/data/data"


function Main() {
  const getContent = (desiredId) => {
    const content = DATA.find(item => item.id === desiredId);
    return content.content || <></>;
  }
  return (
    <>
      <Section className = "join align-center" content = {
        <>
          <Section content = {getContent("nav-logo")} />
          <Section className = "join"  width = {600} content = {getContent("nav-links")} />
        </>
      }/>
      <Section height = {300} backgroundColor = {"#495e57"} content = {
      <>
        <Section backgroundColor = {"#495e57"} isVertical = {true} content = {getContent("intro-text")}/>
        <Section content = {getContent("intro-image")}/>
      </>
      }/>
      <Section 
        height = {50}
        content = {getContent("week-special-header")}
        className = {"week-special-header"}
      />
      <Section 
        content = {

          getContent("week-specials").map((item) => 
          <Section isVertical = {true} content = {
            <>
              <Section className = {"meal-card"} width = {400} backgroundColor = {"#edefee"} isVertical = {true} content = {item} />
            </>
           }/>
          )

        }
      />
      <Section 
        backgroundColor = "#495e57"
        content = {getContent("testimonial-header")}
        className = "font-white join"
      />
      <Section 
        backgroundColor = "#495e57"
        content = {

          getContent("testimonials").map((item) => 
          <Section isVertical = {true} content = {
            <>
              <Section backgroundColor = "white" className = {"testimonial-card"} isVertical = {true} content = {item} />
            </>
           }/>
          )
        }
      />
      <Section content = {getContent("about")}
      />

      <Section backgroundColor = "#495e57" className = "join"
        content = {
          <>
            <Section  height = {200} isVertical = {true} content = {getContent("footer-logo")}/>
            <Section height = {200} className = {"font-white vertical-section"} isVertical = {true} content = {getContent("nav-useful-links")}/>
            <Section height = {200} className = {"font-white"} isVertical = {true} content = {getContent("nav-contact")}/>
            <Section height = {200} className = {"font-white"} isVertical = {true} content = {getContent("nav-connect")}/>
          </>
        }

      />

    </>
  );}

export default Main;