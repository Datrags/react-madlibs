//Story
//Displays the story from user inputed words
//Takes an object of words as props 
const Story = ({wordsObj}) => {
    //destructure the words object we recieve and place the words into the story
    const {name, adj1,adj2,adj3,adj4,adj5,plural_noun,verb_ing,noun,animal} = wordsObj;
    const theStory = `
    Once upon a time, there was a ${adj1} guy named ${name}.
    One day, ${name} decided to visit the ${adj2} zoo.
    At the Zoo, the first thing ${name} saw was a ${animal} eating ${plural_noun}.
    It was very ${adj3} to see that!
    Next, ${name} saw an ${adj4} ${animal} that was ${verb_ing} with a ${noun}. 
    ${name} laughed and said, "That's the most ${adj5} thing I've ever seen!"`;

    const dividedStory = theStory.split("\n").map((line, i) => <p key={"s"+i}>{line}</p>);

    return <div>{dividedStory}</div>
}

export default Story;