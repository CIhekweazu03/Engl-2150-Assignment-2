import requests
import streamlit as st
from streamlit_lottie import st_lottie
import PIL
from PIL import Image

st.set_page_config(page_title="Why Do We Tell Superhero Stories?", layout="wide")
st.sidebar.success("Select a page")
st.title("Why Do We Tell Superhero Stories?")

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
img_1 = Image.open("images/betaray.png")
img_2 = Image.open("images/bpandstorm.jpeg")
img_3 = Image.open("images/ironman.jpeg")


# ---- HEADER SECTION ----
with st.container():
    st.header("An Expert's Opinion")
    st.write(
        """
        \t\"The heroes represent the wholesome part of society. Society has a wholesome side and it has a downside. We know where those facets lie. They are common to all of us.\"
        \n\t-Jack Kirby
        """
    )

# ---- Other's Opinion ----
with st.container():
    st.write("---")
    st.header("Why Tell These Stories? (From Discussion 3)")
    st.write("##")
    text_column, image_column = st.columns((1, 2)) #st.columns((1, 2))
    with text_column:
        st.subheader("Other's Opinion")
        st.write(
            """
            In two separate disucssion questions centered on woman superheroes (Wonder Woman in particular), and black superheroes.
            Here are a few of my favorite responses:
            - Parker Kline:  \"I believe that stories about superheroes are told for many varying reasons. At the simplest, they can be told for entertainment value or just for the sake of a story. However, many heroes are portrayed as the good nature of people. They represent the best of what people can and should be. Most heroes have powers or abilities, but all of them face problems because in the end they are all human as well. This helps to show how problems we face in life happen to anyone, even the best.\"
            - Joseph Wander: \"I think that stories about superheroes are told for several reasons. Those being for entertainment, to teach lessons, and for the passion behind creating these stories. Nowadays, Marvel is one of the biggest, if not the biggest film company around. Marvel is constantly releasing movies and shows about superheroes and we the consumers love it because these stories are so entertaining. Stories about superheroes often times have an overarching theme or life lesson. I think that these lessons are told very well through stories about superheroes. Finally, there are people such as Stan Lee that have a great passion for making these stories.\"
            """
        )
    with image_column:
        st.image(img_1)
        st.markdown("[Where This Beta Ray Bill Panel Comes From](https://www.marvel.com/comics/issue/89742/thor_2020_22)")
with st.container():
    image_column, text_column  = st.columns((2, 1)) #st.columns((2, 1))
    with text_column:
        st.subheader("Personal Opinion")
        st.write(
            """
            My thoughts on the question:
            - I believe we tell stories about superheroes because it allows us to take a fun break from reality and tell a feel-good story about life in general. From super-powerful characters like Superman and Wonder Woman to more “normal” characters like Batman and Hawkeye there is some character for everyone to relate to and look up to. Superhero stories can also be excellent examples of going through trials and tribulations and coming out of them victorious and that one doesn’t have to be perfect all the time in order to be a hero in their own right.     
            """
        )
    with image_column:
        st.image(img_2)
        st.markdown("[Where This Cool Black Panther and Storm Image Comes From](https://fandomwire.com/9-ways-black-panther-storms-relationship-changed-over-the-years/)")


# ---- Personal Opinion ----
with st.container():
    st.write("---")
    st.header("Reflection")
    st.write("##")
    text_column, image_column = st.columns((1, 2))
    with text_column:
        st.write(
            """
            Over the course of this semester my view on this topic hasn't changed drastically, but it certainly has evolved.
            Superhero stories, when done right, can be a reflection of all of our lives in some way another. Sure we may not be
            a multi-billionaire genius like Iron Man or Batman, but we may know someone who battles addiction, or may have lost a parent
            at some point in their life. Superhero stories signify that things aren't always going to go right in lives. If Superman, a near
            perfect being can struggle, so can you. These stories provide a form of inspiration that we can all overcome life's challenges
            despite how dire our situations may seem at a given moment. All of this can be wrapped up in funny stories, with ridiculous characters,
            but the message is still always there.
            """
        )
    with image_column:
        st.image(img_3)
        st.markdown("[Where This Awesome Panel Comes From](https://www.marvel.com/comics/issue/85582/iron_man_2020_6)")
