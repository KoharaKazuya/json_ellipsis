use clap::{App, Arg};
use json_ellipsis::{run, Options};
use std::{
    error::Error,
    io::{self, Read},
};

fn main() -> Result<(), Box<dyn Error>> {
    let default_opts: Options = Default::default();

    let matches = App::new("json-ellipsis")
        .version("0.0.0")
        .author("KoharaKazuya <reflect.results@gmail.com>")
        .about("Omit JSON partially and keep it below the specified size.")
        .arg(
            Arg::with_name("max-bytes")
                .short("b")
                .long("max-bytes")
                .help("maximum bytes of JSON")
                .takes_value(true),
        )
        .arg(
            Arg::with_name("ellipsis")
                .short("e")
                .long("ellipsis")
                .help("JSON value for ellipsis")
                .takes_value(true),
        )
        .get_matches();

    let max_bytes = matches
        .value_of("max-bytes")
        .and_then(|s| s.parse::<usize>().ok())
        .unwrap_or(default_opts.max_bytes);

    let ellipsis = matches
        .value_of("ellipsis")
        .unwrap_or(default_opts.ellipsis);

    let mut buf = String::new();
    let stdin = io::stdin();
    let mut handle = stdin.lock();
    let _ = handle.read_to_string(&mut buf)?;

    let s = run(
        &buf,
        Options {
            max_bytes,
            ellipsis,
        },
    )?;

    println!("{}", s.json);
    Ok(())
}
