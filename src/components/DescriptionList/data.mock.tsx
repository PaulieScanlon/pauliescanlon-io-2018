import { draculaTheme } from "../../styles/theme";

export const defaultList = [
  {
    term: "Lorem",
    description: "Ipsum"
  },
  {
    term: "Dolo",
    description: "Sit"
  },
  {
    term: "Consectetur",
    description: "Adipiscing"
  },
  {
    term: "Fusce",
    description: "Vitae"
  },
  {
    term: "Molestie",
    description: "Suscipit"
  }
];

export const termList = [
  {
    term: (
      <div>
        <span>Lorem </span>
        <span style={{ color: `${draculaTheme.orange}` }}>Ipsum</span>
      </div>
    ),
    description: "Ipsum"
  },
  {
    term: (
      <div>
        <span>Dolo </span>
        <span style={{ color: `${draculaTheme.green}` }}>Sit</span>
      </div>
    ),
    description: "Sit"
  },
  {
    term: (
      <div>
        <span>Consectetur </span>
        <span style={{ color: `${draculaTheme.yellow}` }}>Adipiscing</span>
      </div>
    ),
    description: "Adipiscing"
  },
  {
    term: (
      <div>
        <span>Fusce </span>
        <span style={{ color: `${draculaTheme.red}` }}>Vitae</span>
      </div>
    ),

    description: "Vitae"
  },
  {
    term: (
      <div>
        <span>Molestie </span>
        <span style={{ color: `${draculaTheme.green}` }}>Suscipit</span>
      </div>
    ),
    description: "Suscipit"
  }
];

export const termMoreList = [
  {
    term: (
      <div>
        <span>Lorem </span>
        <span style={{ color: `${draculaTheme.purple}` }}>0</span>
        <span style={{ color: `${draculaTheme.red}` }}>%</span>
      </div>
    ),
    description: "Ipsum"
  },
  {
    term: (
      <div>
        <span>Dolo </span>
        <span style={{ color: `${draculaTheme.purple}` }}>0</span>
        <span style={{ color: `${draculaTheme.red}` }}>%</span>
      </div>
    ),
    description: "Sit"
  },
  {
    term: (
      <div>
        <span>Consectetur </span>
        <span style={{ color: `${draculaTheme.purple}` }}>0</span>
        <span style={{ color: `${draculaTheme.red}` }}>%</span>
      </div>
    ),
    description: "Adipiscing"
  },
  {
    term: (
      <div>
        <span>Fusce </span>
        <span style={{ color: `${draculaTheme.purple}` }}>0</span>
        <span style={{ color: `${draculaTheme.red}` }}>%</span>
      </div>
    ),

    description: "Vitae"
  },
  {
    term: (
      <div>
        <span>Molestie </span>
        <span style={{ color: `${draculaTheme.purple}` }}>0</span>
        <span style={{ color: `${draculaTheme.red}` }}>%</span>
      </div>
    ),
    description: "Suscipit"
  }
];

export const descriptionList = [
  {
    term: "Lorem",
    description: <a href="mailto:lorem@ipsum.com">Ipsum</a>
  },
  {
    term: "Dolo",
    description: <a href="http://www.example.com">Sit</a>
  },
  {
    term: "Consectetur",
    description: <a href="http://www.example.com">Adipiscing</a>
  },
  {
    term: "Fusce",
    description: <a href="http://www.example.com">Vitae</a>
  },
  {
    term: "Molestie",
    description: <a href="http://www.example.com">Suscipit</a>
  }
];

export const descriptionMoreList = [
  {
    term: "Lorem",
    description: (
      <span style={{ color: `${draculaTheme.comment}` }}>
        [---------------------]
      </span>
    )
  },
  {
    term: "Dolo",
    description: (
      <span style={{ color: `${draculaTheme.comment}` }}>
        [------------------]
      </span>
    )
  },
  {
    term: "Consectetur",
    description: (
      <span style={{ color: `${draculaTheme.comment}` }}>
        [---------------]
      </span>
    )
  },
  {
    term: "Fusce",
    description: (
      <span style={{ color: `${draculaTheme.comment}` }}>[------------]</span>
    )
  },
  {
    term: "Molestie",
    description: (
      <span style={{ color: `${draculaTheme.comment}` }}>[---------]</span>
    )
  }
];
