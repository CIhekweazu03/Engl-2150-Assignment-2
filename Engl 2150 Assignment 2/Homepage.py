import requests
import streamlit as st
from streamlit_lottie import st_lottie
from PIL import Image


st.set_page_config(page_title="CIhekweazu Assignment", layout="wide")

st.sidebar.success("Select a page")

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
img_blackpanther = Image.open("images/blackpanther.png")
img_thor = Image.open("images/thormain.png")



# ---- HEADER SECTION ----
with st.container():
    st.title("Hi, I am Christian Ihekweazu :sunglasses:")
    st.subheader("I'm a student in the Superheroes Literature Course at Clemson University")
    st.write(
        "My personal hobbies include working out, playing video games, and of course, reading comics!"
    )

# ---- WHAT IS THIS ABOUT ----
with st.container():
    #st.write("---")
    left_column, right_column = st.columns(2)
    with left_column:
        st.header("What Exactly Is This For?")
        st.write("##")
        st.write(
            """
            On this website I plan on discussing the following topics:
            - What exactly is a superhero?
            - Why do we tell superheroes stories?
            - What does the future of superhero stories look like?
            """
        )
    with right_column:
        st_lottie(lottie_coding, height=300, key="coding")

# ---- Self Description ----
with st.container():
    st.write("---")
    st.header("A Little Bit About Me")
    st.write("##")
    text_column, image_column = st.columns((1, 2)) #st.columns((1, 2))
    with text_column:
        st.subheader("A Personal Favorite")
        st.write(
            """
            I am a huge Black Panther fan! I love him throughout just about all of his adaptations from the "King of the Dead" Black Panther we see in 
            Jonathan Hickman's Avengers and New Avengers comics to the more mellowed king we saw in the MCU, and even his adaptation in the cartoon Avengers: Earth's Mightiest Heroes!
            I love how he has to balance balancing being a superhero for all people while still needing to prioritize Wakanda.
            """
        )
    with image_column:
        st.image(img_blackpanther)
        st.markdown("[Where This Awesome Black Panther Image Comes From](https://www.marvel.com/comics/issue/40474/fantastic_four_1998_608)")
with st.container():
    image_column, text_column  = st.columns((2, 1)) #st.columns((2, 1))
    with text_column:
        st.subheader("Another Favorite")
        st.write(
            """
            I also love Thor comics and some of his main movies.
            I think Thor's story arc is quite amazing. From being an arrogant, prideful warrior who is by all means unfit to be a leader of any kind
            to being an Avenger who's willing to sacrifice his own life to save the people he cares about the most.
            I also find it quite fascinating that this character who is quite stoic in nature also struggles with self worth when it comes to Mjolnir.
            The idea that despite all of Thor's accomplishments and feats of strengths still struggling to see himself as worthy or proving to Odin that he is worthy is pretty unique.
            """
        )
    with image_column:
        st.image(img_thor)
        st.markdown("[Where This Legendary Thor Image Comes From](https://www.marvel.com/comics/issue/89743/thor_2020_23)")



# ---- CONTACT ----
with st.container():
    st.write("---")
    st.header("Get In Touch With Me!")
    st.write("##")

    # Documention: https://formsubmit.co/ !!! CHANGE EMAIL ADDRESS !!!
    contact_form = """
    <form action="https://formsubmit.co/cihekwe@g.clemson.edu" method="POST">
        <input type="hidden" name="_captcha" value="false">
        <input type="text" name="name" placeholder="Your name" required>
        <input type="email" name="email" placeholder="Your email" required>
        <textarea name="message" placeholder="Your message here" required></textarea>
        <button type="submit">Send</button>
    </form>
    """
    left_column, right_column = st.columns(2)
    with left_column:
        st.markdown(contact_form, unsafe_allow_html=True)
    with right_column:
        st.empty()
