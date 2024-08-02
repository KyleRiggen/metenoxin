interface UserData {
  name: string;
  type: string;
}

export async function load({ fetch }): Promise<{ props: { data: UserData } }> {
  const response = await fetch('/data.json');
  const data: UserData = await response.json();

  return {
    props: {
      data
    }
  };
}
