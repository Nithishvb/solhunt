import {
  Card,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Rewards from "./_components/Rewards";
import Upvotes from "./_components/Upvotes";

function page() {
  return (
    <div className="flex justify-center pt-10">
      <Tabs defaultValue="upvotes" className="w-[50%]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="upvotes">Upvotes</TabsTrigger>
          <TabsTrigger value="reward">Rewards</TabsTrigger>
        </TabsList>
        <TabsContent value="upvotes">
          <Card>
            <Upvotes />
          </Card>
        </TabsContent>
        <TabsContent value="reward">
          <Card>
            <Rewards />
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default page;
