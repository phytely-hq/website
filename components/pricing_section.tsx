"use client";

import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircleIcon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function PricingTariffs() {
  return (
    <section className="bg-background w-full h-[100dvh] flex flex-col pt-10 md:pt-14 overflow-y-auto overflow-x-hidden">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 shrink-0 w-full pb-20">

        <div className="mb-12">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase leading-[0.88] tracking-tighter text-balance">
            <span className="block text-foreground">More Bang.</span>
            <span className="block text-muted-foreground">For Buck.</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Card 01 */}
          <Card className="flex flex-col justify-between">
            <CardHeader>
              <div className="flex justify-between items-center mb-2">
                <CardTitle className="text-xl font-black uppercase tracking-tighter">Hobby Token Bundle</CardTitle>
                <Badge variant="secondary" >10% off</Badge>
              </div>
              <CardDescription>
                Perfect for running heavy analytics and risk modeling on a smaller scale. 
                Get <b>100</b> requests to test your data with zero monthly fees.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-8">
                <span className="text-5xl font-black block mb-2">
                  $5
                </span>
              </div>
              <ul className="space-y-4 text-xs text-muted-foreground tracking-tight">
                <li className="flex gap-3"><CheckCircleIcon size={15} weight="fill" className="text-primary" /> Standard Endpoints Access</li>
                <li className="flex gap-3"><CheckCircleIcon size={15} weight="fill" className="text-primary" /> 5 requests/second rate limit</li>
                <li className="flex gap-3"><CheckCircleIcon size={15} weight="fill" className="text-primary" /> 100% uptime</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full tracking-wider">
                Get Provision Key
              </Button>
            </CardFooter>
          </Card>

          {/* Card 02 */}
          <Card className="flex flex-col justify-between relative overflow-hidden">    
            <CardHeader>
              <div className="flex justify-between items-center mb-2">
                <CardTitle className="text-xl font-black uppercase tracking-tighter text-primary">Standard Token Bundle</CardTitle>
                <Badge variant="secondary" >Popular</Badge>
              </div>
              <CardDescription>
                The professional benchmark for active field monitoring. 
                Get <b>1,000</b> requests to power heavy analytics, automated risk modeling and real-time decision making.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-8">
                <span className="text-5xl font-black block mb-2">
                  $50
                </span>
              </div>
              <ul className="space-y-4 text-xs text-muted-foreground tracking-tight">
                <li className="flex gap-3"><CheckCircleIcon size={15} weight="fill" className="text-primary" /> All Telemetry Endpoints</li>
                <li className="flex gap-3"><CheckCircleIcon size={15} weight="fill" className="text-primary" /> 50 requests/second rate limit</li>
                <li className="flex gap-3"><CheckCircleIcon size={15} weight="fill" className="text-primary" /> Priority webhooks</li>
                <li className="flex gap-3"><CheckCircleIcon size={15} weight="fill" className="text-primary" /> 100% uptime</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full tracking-wider">
                Get Provision Key
              </Button>
            </CardFooter>
          </Card>

          {/* Card 03 */}
           <Card className="flex flex-col justify-between">
            <CardHeader>
              <div className="flex justify-between items-center mb-2">
                <CardTitle className="text-xl font-black uppercase tracking-tighter">Custom Token Bundle</CardTitle>
                <Badge variant="secondary" >Custom</Badge>
              </div>
              <CardDescription>
                Custom infrastructure for regional co-ops, insurance hubs, and global data syncs.
                Bespoke infrastructure with custom endpoint integration for enterprise scale and global operations. Contact us for pricing and availability.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-8">
                <span className="text-5xl font-black block mb-2">
                  Custom
                </span>
              </div>
              <ul className="space-y-4 text-xs text-muted-foreground tracking-tight">
                <li className="flex gap-3"><CheckCircleIcon size={15} weight="fill" className="text-primary" /> Standard Endpoints Access</li>
                <li className="flex gap-3"><CheckCircleIcon size={15} weight="fill" className="text-primary" /> 5 requests/second rate limit</li>
                <li className="flex gap-3"><CheckCircleIcon size={15} weight="fill" className="text-primary" /> 100% uptime</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full tracking-wider">
                Request Technical Consultation
              </Button>
            </CardFooter>
          </Card>

        </div>

        <Separator className="my-12" />

        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div className="max-w-xl">
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground mb-3 drop-shadow-sm">
                Algorithmic Leverage
            </p>
            <p className="text-xs md:text-sm font-medium leading-relaxed text-foreground drop-shadow-md">
                <span className="text-primary mr-2 font-black">//</span>
                Hiring a team of data analysts is expensive. Our API handles the heavy math and 
                risk modeling for you, giving you professional-grade insights on a utility budget.
                De-risk your operation without the extra unnecessary headcount.
            </p>
          </div>
          
          <Button 
            variant="default" 
            size="sm" 
          >
            Access API Docs
          </Button>
        </div>

      </div>
    </section>
  );
}