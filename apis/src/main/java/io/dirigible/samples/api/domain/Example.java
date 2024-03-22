package io.dirigible.samples.api.domain;

import java.util.ArrayList;
import java.util.List;

public class Example {

	private String id;

	private String name;

	private List<SubExample> subexamples = new ArrayList<>();

	public String getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public List<SubExample> getSubexamples() {
		return subexamples;
	}

	public void setId(String id) {
		this.id = id;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setSubexamples(List<SubExample> subexamples) {
		this.subexamples = subexamples;
	}

	public Example withId(String id) {
		setId(id);
		return this;
	}

	public Example withName(String name) {
		setName(name);
		return this;
	}

	public Example withSubexamples(List<SubExample> subexamples) {
		setSubexamples(subexamples);
		return this;
	}
}
