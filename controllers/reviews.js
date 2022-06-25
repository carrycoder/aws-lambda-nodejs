exports.getReviews = (req,res)=>{
    let reviews = [
        {name: "saurav", post: "very nice office"}, 
        {name: "gaurav", post: "environement is cool"}
    ]; 
    res.status(200).send(reviews);
}

