import requests
import streamlit as st
from streamlit_lottie import st_lottie
import PIL
from PIL import Image

st.set_page_config(page_title="Representation Within Superhero Stories", layout="wide")
st.sidebar.success("Select a page")
st.title("Representation Within Superhero Stories")

def load_lottieurl(url):
    r = requests.get(url)
    if r.status_code != 200:
        return None
    return r.json()
# Use local CSS
def local_css(file_name):
    with open(file_name) as f:
        st.markdown(f"<style>{f.read()}</style>", unsafe_allow_html=True)
local_css("style/style.css")

# ---- LOAD ASSETS ----
lottie_coding = load_lottieurl("https://assets4.lottiefiles.com/packages/lf20_mu1asgg9.json")
img_1 = Image.open("images/wonderwoman.jpeg")
img_2 = Image.open("images/bpandbluemarvel.png")
img_3 = Image.open("images/ultimatescover.jpeg")


# ---- HEADER SECTION ----
with st.container():
    st.header("An Expert's Opinion")
    st.write(
        """
        \t\"Those stories have room for everyone, regardless of their race, gender, religion, or color of their skin\"
        \n\t-Stan Lee
        """
    )

# ---- Other's Opinion ----
with st.container():
    st.write("---")
    st.header("Representation With Superhero Stories (From Discussions 20 and 23)")
    st.write("##")
    text_column, image_column = st.columns((2, 1)) #st.columns((1, 2))
    with text_column:
        st.subheader("Other's Opinion")
        st.write(
            """
            In two separate disucssion questions centered on woman superheroes (Wonder Woman in particular), and black superheroes.
            Here are a few of my favorite responses:
            - Madison Metts on Wonder Woman:  \"...There are two parts of the reading that stood out to me as being really important and giving great explanation to these questions. The book says, "Women are full human beings; we cannot love others until we love ourselves; love and respect can only exist between equals". The text later says "Wonder Woman symbolizes... strength and self reliance for women, sisterhood and mutual support among women, peace, fullness, and esteem for human life, a diminishment both of masculine aggression and the belief that violence is the only way of solving conflicts". These two quotes sum up Wonder Woman's function in comics, why she stands out above others, and why she remains so popular such a long time after her creation. It is due to the things she symbolizes and the lessons taught though her story.\"
            
            - Trinity Brown on Black Panther: \"Overtime society has largely come to accept the addition of black superheroes. When black male superheroes were first introduced to comics, they were still subordinate to the caucasian main character, who had all the powers of a stereotypical superhero. Over a decade, black superheroes have gained a sense of masculinity and clinched the role of the main character in some mediums. The popularity of Black Panther allows society to shift away from just thinking that black superheroes were incorporated and drawn to represent male domination. The Black Panther movie dives deep into the soul of T'Challa, allowing viewers to understand that being a superhero is more than just what is seen on the surface. I have seen the second Black Panther movie, and while T'Challa is not necessarily in the movie anymore due to the death of Chadwick Boseman, the importance of his character and the impact he left on his family, and even his enemies still hold true.\"
            """
        )
    with image_column:
        st.image(img_1)
        st.markdown("[Where This Wonderful Wonder Woman Image Comes From](https://www.dc.com/comics/wonder-woman-2016/wonder-woman-75th-anniversary-special-1)")
with st.container():
    image_column, text_column  = st.columns((2, 1)) #st.columns((2, 1))
    with text_column:
        st.subheader("Personal Opinion")
        st.write(
            """
            My thoughts on these two questions:
            - From looking at different interviews and articles about Gloria Steinem discussing Wonder Woman, I think it’s pretty clear that she views Wonder Woman as not only an icon, but as the preeminent woman superhero. And quite frankly, she’s really justified in her views. Wonder Woman stands out for quite a few reasons. She possesses a lot of what society typically deems heroic/ideal “masculine” traits whilst still managing to be uniquely feminine in nature. She’s an incredibly fierce and hardened warrior, but you could still see her being a caring motherly-type figure to those in need. For the most part, she’s always stands up as her sisters’ keeper when need be (A great example of this being the graphic novel, Wonder Woman: The Hiketeia). She’s also just an all-around super powerful character which is quite rare for woman superheroes in most comics. In hindsight, a lot of my favorite woman superheroes do fall into the trope of being “glass-cannons,” so while they are super powerful, it feels like the slightest of attacks (relatively speaking of course), can knock them out of their fight. Wonder Woman on the other hand is just a straight up warrior and can effectively take hits as well as she can dish them out. All these factors contribute to her remaining a potent symbol even eighty years after her creation. She truly is a Superman-level icon, in that she is the bar (or litmus test) that other superheroes, and more specifically woman superheroes are judged by.
            - Portrayals of black male superheroes have changed primarily in both having individual, as well as the collective, black male superheroes be far more well-rounded in terms of intelligence, emotions, powers, etc. There are plenty of super genius-type characters like Blue Marvel and Black Panther. Even in T’Challa’s short time in the MCU, we see him emotionally mature throughout all of his appearances. We also see a far wider variety of black superhero powers, and (partially) gone are the days of most black superheroes being electricity-related, even though there is still work to be done in this facet. I think films like Black Panther emphasize the importance of being a well-rounded man, and that masculinity is far more than just physical strength, that it’s also a matter of being strong mentally, emotionally, psychologically, etc., and that a person like Chadwick Boseman in real life and T’Challa in the movies are really a perfect embodiment of that. Even in Chadwick’s absence, I felt that Wakanda Forever does an excellent job of continuing with that with a character like M’Baku, having matured (or at least shown a different side of himself) as a leader since his appearance in the first movie.
            """
        )
    with image_column:
        st.image(img_2)
        st.markdown("[Where This Cool Black Panther and Blue Marvel Interaction Comes From](https://www.marvel.com/articles/comics/black-panther-s-pride-the-ultimates)")


# ---- Personal Opinion ----
with st.container():
    st.write("---")
    st.header("Conclusion")
    st.write("##")
    text_column, image_column = st.columns((1, 2))
    with text_column:
        st.write(
            """
            These two discussions took place near the end of the semester, so most of my thoughts are roughly the same. As time continues, superhero stories have become more diverse and willing to tell stories of previously underrepresented groups within the superhero landscape. This progress in representation is paramount to the success of superhero stories because it allows everyone to get involved in a way some felt that they couldn't have before. Even if someone isn't the biggest fan of superheroes in general, I can guarantee that everyone can find at least one superhero that they can relate to in one way or another. Quite frankly, I'd argue that superheroes are by far the most diverse type of adventure stories because of their large in scope and size nature.
            In the realm of fictional stories, there often isn't much representation of historically underrepresented groups, but comics, especially recently, have really helped to buck that trend.
            """
        )
    with image_column:
        st.image(img_3)
        st.markdown("[Where This Awesome Cover Comes From](https://www.marvel.com/comics/issue/57251/ultimates_2015_1)")