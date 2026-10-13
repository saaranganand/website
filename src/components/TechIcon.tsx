export const TechIcon = ({ component }: { component: React.ElementType }) => {
  const Component = component;
  return <Component className="size-10 fill-white/70 [&_*]:fill-white/70" />;
};
