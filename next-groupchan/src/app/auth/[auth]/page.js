import AuthForm from "@/components/AuthForm/AuthForm"

const Page = ({params}) => {

    return ( <main>
        <AuthForm form={params.auth} /></main> );
}
 
export default Page;