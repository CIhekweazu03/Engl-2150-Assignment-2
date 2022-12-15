import requests
import streamlit as st
from streamlit_lottie import st_lottie
import PIL
from PIL import Image

st.set_page_config(page_title="Bonus", layout="wide")
st.sidebar.success("Select a page")
st.title("Bonus")

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
img_2 = Image.open("images/bpandstorm.jpeg")
img_3 = Image.open("images/ironman.jpeg")


# ---- HEADER SECTION ----
with st.container():
    st.header("Random Stuff That Didn't Fit Elsewhere")

st.image(img_1)
st.markdown("[Where This Underrated, All-time Great, Comic Panel Comes From](https://tfwiki.net/wiki/The_Not_Knowing)")
st.write("""This is honestly my favorite comic book panel of all time. It is truly a haunting image to see just how many deaths Megatron is responsible for.
        And then to learn that not only do the flowers represent death, but each flower is representative of a dozen lives lost is just deep.
        Rarely do we see supervillains forced to see the consequences of their actions and their villainy in this capacity. 
        This Transformers comic, as well as all of the IDW Transformers comics did a great job of covering some of these topic.
        """)