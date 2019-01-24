export default function notFoundRoute (req,res,next)
{
    console.log(" Inside the notFoundRoute ");
    next({ Error : "not Found" });
}