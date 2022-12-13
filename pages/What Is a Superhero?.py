import requests
import streamlit as st
from streamlit_lottie import st_lottie
import PIL
from PIL import Image

st.set_page_config(page_title="What Is a Superhero?", layout="wide")
st.sidebar.success("Select a page")
st.title("What Is a Superhero?")

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
img_1 = Image.open("images/justiceleague.png")
img_2 = Image.open("images/supesWWbatman.jpeg")
img_3 = Image.open("images/bpthor.png")


# ---- HEADER SECTION ----
with st.container():
    st.header("Expert Opinions")
    st.write(
        """
        - Webster defines a superhero as \"a fictional hero having extraordinary or superhuman powers.\"
        - Roger B. Rollin, in an essay titled "The Epic Hero and Pop Culture," discusses different types of heroes previously established by Northrop Frye in Anatomy of Criticism. Rollin's essay primarily focuses on types I-III, which range from essentially god-like beings to normal heroic characters.
        """
    )

# ---- Other's Opinion ----
with st.container():
    st.write("---")
    st.header("Traits of A Superhero (From Discussion 6)")
    st.write("##")
    text_column, image_column = st.columns((2, 1.5)) #st.columns((1, 2))
    with text_column:
        st.subheader("Other's Opinion")
        st.write(
            """
            In a disucssion post centered on Masked Heroes, my classmates were tasked with discussing which of the seven superhero traits were most important.
            (Richard Reynolds defined the seven as: 1. Lost parents, 2. The man-god, 3. Justice, 4. The normal and the superpowered, 5. The secret identity, 6. Superpowers and politics, and 7. Science as magic.)
            Here are a few of my favorite responses:
            - Grace Stegmaier:  \"I think of the seven traits of superheroes that Reynolds lists, justice is the most important one. I say this because it was between justice and superpowers for me when reflecting, but I know not all heros have these superpowers, but they are still heros because they are committed to justice above all else and are willing to break the law and get into fights if it means achieving what the superhero considers to be justice. I think you see these traits appear not just in comics but in movies and books where the protagonist might have some sort of tragic backstory but overcome their circumstances and are still committed to justice and doing the right thing.\"
            - Madison Metts: \"Of the seven traits of superheroes, I think secret identity is the most important. If a superhero does not have a secret identity, they could be under attack at any time, because everyone knows who they are. Many times superheroes have to engage in some violence to carry out their mission; this would give people a reason to want to harm the superhero. Secret identity would also be important for a superhero in order to protect their family from any harm or violence. One more reason secret identity is important for a superhero is so they can maintain real relationships. It would be difficult to have friends and normalcy in life if your only identity was a superhero.\"
            - Alyssa Gilbert: \"I think 3 and 5 are the most important. 3, that the hero’s devotion to justice overrides even his devotion to the law, is important because it shows a strong moral compass, where even the law is below what the hero believes is right. This moral compass is what makes a hero a hero in the first place. 5, the extraordinary nature of the hero contrasted with the mundane nature of his alter-ego, is also important because it gives the hero duality, and makes them relatable to the audience despite their supernatural/above average abilities. It’s what makes them lovable to an audience, and gives depth to their character.\"
            """
        )
    with image_column:
        st.image(img_1)
        st.markdown("[The Series This Justice League Image Comes From](https://dcau.fandom.com/wiki/Justice_League_(animated_series))")
with st.container():
    image_column, text_column  = st.columns((2, 1)) #st.columns((2, 1))
    with text_column:
        st.subheader("Personal Opinion")
        st.write(
            """
            For context, this was my repsonse to the question:
            - I believe the man-god, justice, and the normal/superpowered are the most important. Honestly, with these three alone, you can make a pretty well-rounded superhero, who is incredibly powerful, relatable, and, most importantly, always trying to do the right thing. I think science as magic shows up in quite a few forms of media because it's the most "realistic" way to rationalize how some sci-fi/superhero stories could take place in our real lives. Obviously, AI is quite an extensive time away from this, but who's to say that someone or government doesn't create a malicious AI which believes in wiping out most of human life like Ultron? Pseudorealistic stories like that are incredibly easy to latch on to and quite entertaining.
            The traits laid out by my classmates do a great job of establishing the most important traits.
            All of these traits do a great job of emphasizing just how amazing some of our superheroes are as well as showcasing just how far ahead of us, morally speaking, that they truly are.
            """
        )
    with image_column:
        st.image(img_2)
        st.markdown("[Where This Funny Panel Comes From](https://dc.fandom.com/wiki/Justice_League_of_America_Vol_2_0)")


# ---- Personal Opinion ----
with st.container():
    st.write("---")
    st.header("Conclusion")
    st.write("##")
    text_column, image_column = st.columns((1, 2))
    with text_column:
        st.write(
            """
            Since this discussion took place near the beginning of the semester, my ideas on this topic have changed a bit. I thought a superhero was someone with ridiculous powers, amazing feats of strength, charismatic, witty, and practically perfect all around. But now? A superhero, to me, is someone who consistently does the right thing to the best of their abilities. As Billy Ocean once said, "When the going gets tough, the tough get going." The superheroes are the tough that we can all rely on for inspiration. This includes anyone from heavy hitters like Thor and Superman to supergenius fighters like Black Panther and Batman to \"normal\" humans like our beloved Hawkeyes!
            """
        )
    with image_column:
        st.image(img_3)
        st.markdown("[Where This Awesome Cover Comes From](https://www.marvel.com/comics/issue/67002/avengers_2018_1)")
"""
Another definition of a hero is someone who is concerned about other people's well-being, and will go out of his or her way to help them -- even if there is no chance of a reward. That person who helps others simply because it should or must be done, and because it is the right thing to do, is indeed without a doubt, a real superhero.
\n\t-Stan Lee
"""