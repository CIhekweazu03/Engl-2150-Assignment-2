import requests
import streamlit as st
from streamlit_lottie import st_lottie
import PIL
from PIL import Image

st.set_page_config(page_title="Bonus Page", layout="wide")
st.sidebar.success("Select a page")
st.title("Bonus Page")

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
img_1 = Image.open("images/megatronflowers.jpeg")
img_2 = Image.open("images/megatronmad.png")
img_3 = Image.open("images/megatronkillstarn.png")


# ---- HEADER SECTION ----
with st.container():
    st.header("Loosely Related Random Stuff That Didn't Fit Elsewhere")

st.image(img_1)
st.markdown("[Where This Underrated, All-time Great, Comic Panel Comes From](https://tfwiki.net/wiki/The_Not_Knowing)")
st.write("""This is honestly my favorite comic book panel of all time. It is truly a haunting image to see just how many deaths Megatron is responsible for. And then to learn that not only do the flowers represent death, but each flower is representative of a dozen lives lost is just profound. Rarely do we see supervillains forced to see the consequences of their actions and their villainy in this capacity. This Transformers comic and all of the IDW Transformers comics did a great job covering some of these topics.
        """)
st.write(img_2)
st.write(img_3)
st.markdown("[Where These Amazing Panels Came From](https://tfwiki.net/wiki/The_Dying_of_the_Light_Part_6:_Do_Not_Go_Gentle)")
st.write("""Then issues later to see a newly reformed Megatron face off and destroy some of his very own "creations" from his time as a warlord/tyrant/dictator was just pretty awesome all around.
        """)