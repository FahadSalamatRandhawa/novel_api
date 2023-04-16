
export default function Documentation(){
    return(
        <div className=" w-auto h-screen p-3 flex flex-col items-center justify-center bg-blend-color-burn bg-amber-50/5">
            <div className=" flex-col flex items-center mb-10">
                <div className="text-base md:text-3xl">PSFMA Assignment 2 : Novelty Novels API</div>
                <div className=" break-all text-sm mt-2">This api was created with Neon postgress,nextjs13, a little bit of tailwind</div>
                <div className=" text-red-300">Not mobile responsive</div>
            </div>
            <div>Please put your token in request headers - [token:your token]</div>
            <table className=" table-auto min-h-min border-spacing-1 border-separate border border-slate-500">
                <thead className="">
                    <tr className=" bg-slate-500/60 mt-10">
                        <th >End point</th>
                        <th >Description</th>
                        <th >Type</th>
                        <th>Authenticated</th>
                        <th >Request Variables</th>
                        <th >Example</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className=" border">Status</td>
                        <td className=" border">Returns status of the API</td>
                        <td className=" border">GET</td>
                        <td>No</td>
                        <td className=" border">none</td>
                        <td className=" border">localhost:3000/api/status</td>
                    </tr>
                    <tr>
                        <td className=" border">api-clients</td>
                        <td className=" border">Returns token</td>
                        <td className=" border">POST</td>
                        <td>No</td>
                        <td className=" border">name,email</td>
                        <td className=" border">localhost:3000/api/api-client</td>
                    </tr>
                    <tr>
                        <td className=" border">novels</td>
                        <td className=" border">List of all novels</td>
                        <td className=" border">GET</td>
                        <td>No</td>
                        <td className=" border">limit,type [optional]</td>
                        <td className=" border">localhost:3000/api/novels</td>
                    </tr>
                    <tr>
                        <td className=" border">novels/:novelId</td>
                        <td className=" border">Returns a novel with given Id</td>
                        <td className=" border">GET</td>
                        <td>No</td>
                        <td className=" border">limit,type [optional]</td>
                        <td className=" border">localhost:3000/api/novels/2</td>
                    </tr>
                    <tr>
                        <td className=" border">/protected/orders</td>
                        <td className=" border">Returns list of novels</td>
                        <td className=" border">GET</td>
                        <td>Yes</td>
                        <td className=" border">none</td>
                        <td className=" border">localhost:3000/api/protected/orders</td>
                    </tr>
                    <tr>
                        <td className=" border">/protected/orders/</td>
                        <td className=" border">places an order and returns ID</td>
                        <td className=" border">POST</td>
                        <td>Yes</td>
                        <td className=" border">novelId,customerName</td>
                        <td className=" border">localhost:3000/api/protected/orders/</td>
                    </tr>
                    <tr>
                        <td className=" border">/protected/orders/2A2vd2</td>
                        <td className=" border">updated customer name</td>
                        <td className=" border">PATCH</td>
                        <td>Yes</td>
                        <td className=" border">customerName</td>
                        <td className=" border">localhost:3000/api/protected/orders/2A2vd2</td>
                    </tr>
                    <tr>
                        <td className=" border">/protected/orders/2A2vd2</td>
                        <td className=" border">deletes order</td>
                        <td className=" border">DELETE</td>
                        <td>Yes</td>
                        <td className=" border">none</td>
                        <td className=" border">localhost:3000/api/protected/orders/2A2vd2</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}