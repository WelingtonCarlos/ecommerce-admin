import prismadb from "@/lib/prismadb"

interface DashboardPageDrops {
    params: {storeId: string}
}

const DashboardPage: React.FC<DashboardPageDrops> = async ({
    params
}) => {
    const store = await prismadb.store.findFirst({
        where: {
            id: params.storeId
        }
    })
    return (
        <div>
            Loja Ativa: {store?.name}
        </div>
    )
}


export default DashboardPage