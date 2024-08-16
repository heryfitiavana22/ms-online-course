import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CardStat({ title, desciption, value }: CardStatProps) {
  return (
    <Card x-chunk="dashboard-07-chunk-2">
      <CardHeader className="pb-3">
        <CardTitle>{title}</CardTitle>
        <CardDescription className="max-w-lg text-balance leading-relaxed">
          {desciption}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
}

type CardStatProps = {
  title: string;
  desciption: string;
  value: number | string;
};
