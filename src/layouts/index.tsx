const Index = (props: any) => {
  return (
    <span>
      <div>头部</div>
      <div>{props.children}</div>
    </span>
  );
};

export default Index;
